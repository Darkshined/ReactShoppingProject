import {
  BackgroundImageContainer,
  Body,
  CategoryItemContainer,
} from "./category-item.style.jsx";

const CategoryItem = ({ categories }) => {
  const { imageUrl, title } = categories;

  return (
    <CategoryItemContainer>
      <BackgroundImageContainer imageUrl={imageUrl}></BackgroundImageContainer>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
