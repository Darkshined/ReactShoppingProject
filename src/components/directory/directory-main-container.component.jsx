import CategoryItem from "../category-item/category-item.component";
import { CategoriesContainer } from "./directory-main-container.style.jsx";

const CategoryDirectory = ({ categories }) => {
  return (
    <CategoriesContainer>
      {" "}
      {categories.map((categories) => (
        <CategoryItem key={categories.id} categories={categories} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoryDirectory;
