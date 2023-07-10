import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import NavBar from "./routes/nav-main-bar/nav-main-bar.component";
import Credentials from "./routes/credential-page/credentials.component";
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout-page/checkout.component'

const App = () => {
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
