import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button , {BUTTON_TYPE_CLASSES} from "../button/button.component";
import "./product-card.styles.jsx";
import { Footer, Name, ProductCardContainer , Price } from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt="Shoes" />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttontype={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
