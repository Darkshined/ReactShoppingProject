import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Checkoutitems from "../../components/checkout-items/checkout-items.component";
import "./checkout.style.scss";

const Checkout = () => {
  const { cartItems , cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span> Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItems) => {
        const { id } = cartItems;

        return <Checkoutitems key={id} cartItem={cartItems}></Checkoutitems>;
      })}

      <span className="total">Total: $ {cartTotal}</span>
    </div>
  );
};

export default Checkout;
