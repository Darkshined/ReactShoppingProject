
import { Routes , Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentCategory } from "../../store/categories/category.action";

const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      dispatch(setCurrentCategory(categoriesMap));
    };
 
    getCategories();
    
  }, [dispatch])
 
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>

  )
};

export default Shop;
