import { createContext, useState, useEffect } from "react";
import {
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.jsx";

export const CategoriesContext = createContext({
  currentCategories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [currentCategories, setCategories] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategories(categoriesMap);
    };
 
    getCategories();
    
  }, []);

  const value = { currentCategories };
 
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
