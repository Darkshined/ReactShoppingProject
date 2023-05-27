import { createContext,  useState } from "react";


import PRODUCTS_DATA from '../shop-data.json';

export const ProductsContext = createContext({
 products : []
});

export const ProductsProvider = ({children}) =>{
  const [currentProducts , setProducts ] = useState(PRODUCTS_DATA);
  const value = {currentProducts};


  return (<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>);
}