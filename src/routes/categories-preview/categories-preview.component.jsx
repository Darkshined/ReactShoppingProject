import { Fragment } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCurrentCategory } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const currentCategories = useSelector(selectCurrentCategory);

  return (
    <Fragment>
      {Object.keys(currentCategories).map((title) => {
        const products = currentCategories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
