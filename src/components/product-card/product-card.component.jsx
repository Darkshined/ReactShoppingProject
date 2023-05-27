
import Button from "../button/button.component";
import './product-card.styles.scss';

const ProductCard = ({product_information}) => {
    const {name , price , imageUrl} = product_information;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="Shoes"/>
      <div className="product-card-footer">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}</span>
      </div>
      <Button buttontype='inverted'>Add to card</Button>
    </div>
  );
};

export default ProductCard;
