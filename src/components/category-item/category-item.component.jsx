import "./category-item.style.jsx";

const CategoryItem = ({ categories }) => {
  const { imageUrl, title } = categories;

  return (
    <div className="category-item-container">
      <div
        className="background-image"
        imageUrl = {imageUrl}
        >
      </div>
      <div className="category-item-information">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
