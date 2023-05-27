import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-items/cart-item.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">Your cart is empty</div>

      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;