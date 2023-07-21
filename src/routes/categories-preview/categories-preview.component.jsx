import { Fragment, useEffect } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCategory } from "../../store/categories/category.selector";
import { setCurrentCategory } from "../../store/categories/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";




const CategoriesPreview = () => {


  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      dispatch(setCurrentCategory(categoriesMap));
    };
 
    getCategories();
    
  }, [dispatch]);

  const currentCategories = useSelector(selectCurrentCategory);

  /*const { currentCategories } = useContext(CategoriesContext);*/

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
