import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyCart,
} from "./cart-dropdown.styles.jsx";
import CartItem from "../cart-items/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
      {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
      </CartItemsContainer>
      <Button
        buttontype={BUTTON_TYPE_CLASSES.inverted}
        onClick={goToCheckoutHandler}
      >
        Go to Checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
