import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.component.styles.scss';


const Shop = () => {
  const { currentProducts } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {currentProducts.map((product) => (
        <ProductCard key={currentProducts.id} product_information={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
