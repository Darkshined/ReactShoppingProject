
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import ProductCard from "../product-card/product-card.component";
import { CategoryContainer, Title } from "./category.style";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {selectCurrentCategory} from "../../store/categories/category.selector";


const Category = () => {
  const { category } = useParams();
  const currentCategories = useSelector(selectCurrentCategory);
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
