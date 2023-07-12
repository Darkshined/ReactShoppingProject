
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../product-card/product-card.component";
import { CategoryContainer, Title } from "./category.style";

const Category = () => {
  const { category } = useParams();
  const { currentCategories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(currentCategories[category]);

  useEffect(() => {
    setProducts(currentCategories[category]);
  }, [category, currentCategories]);

  return (
    <>
      <Title>{category}</Title>
      <CategoryContainer>
        {" "}
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoryContainer>
    </>
  );
};

export default Category;
