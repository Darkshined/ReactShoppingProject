import "./category-item.style.scss";

const CategoryItem = ({ categories }) => {
  const { imageUrl, title } = categories;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}>
        {" "}
      </div>
      <div className="category-information">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
