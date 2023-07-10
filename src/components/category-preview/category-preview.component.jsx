import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {Title , CategoryPreviewContainer , Preview} from "./category-preview.style.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreview>
      <h2>
        <Link to={title}>
          <Title className="title"> {title.toUpperCase()} </Title>
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreview>
  );
};

export default CategoryPreview;
