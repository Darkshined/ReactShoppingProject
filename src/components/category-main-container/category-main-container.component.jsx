import CategoryItem from "../category-item/category-item.component";
import './category-main-container.style.scss';


const CategoryDirectory = ({ categories }) => {
    
  return (
    <div className="categories-container">
    {categories.map((categories) => (

      <CategoryItem key={categories.id} categories={categories}/>
    ))}
  </div>
  );
};

export default CategoryDirectory;
