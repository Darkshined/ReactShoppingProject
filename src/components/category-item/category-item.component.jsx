import {
  BackgroundImageContainer,
  Body,
  CategoryItemContainer,
} from "./category-item.style.jsx";

import { useNavigate } from "react-router-dom";

const CategoryItem = ({ categories }) => {
  const { imageUrl, title , route } = categories;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route)

  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImageContainer imageUrl={imageUrl}></BackgroundImageContainer>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
