import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";


const CategoriesPreview = () => {
  const { currentCategories } = useContext(CategoriesContext);
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
