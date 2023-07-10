import "./cart-icon.styles.jsx";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { ShoppingIcon ,CartIconContainer , ItemCounter } from "./cart-icon.styles.jsx";


const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems , itemCount } = useContext(CartContext);

  const toggleHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
   <CartIconContainer onClick={toggleHandler}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCounter>{itemCount}</ItemCounter>
    </CartIconContainer>
  );
};

export default CartIcon;
