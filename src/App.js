import { useEffect } from "react";
import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import NavBar from "./routes/nav-main-bar/nav-main-bar.component";
import Credentials from "./routes/credential-page/credentials.component";
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout-page/checkout.component'
import {
  onAuthStateChangeListener,createUserDocumentFromAuth} from "./utils/firebase/firebase.utils"
import {setCurrentUser} from './store/user/user.action'
import { setCurrentCategory } from "./store/categories/category.action";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "./utils/firebase/firebase.utils";
const App = () => {

const dispatch = useDispatch()


  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      dispatch(setCurrentCategory(categoriesMap));
    };
 
    getCategories();
    
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="credentials" element={<Credentials/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  );
};

export default App;
