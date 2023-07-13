import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Checkoutitems from "../../components/checkout-items/checkout-items.component";
import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from "./checkout.style.jsx";



const Checkout = () => {
  const { cartItems , cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span> Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItems) => {
        const { id } = cartItems;

        return <Checkoutitems key={id} cartItem={cartItems}></Checkoutitems>;
      })}

      <Total>Total: $ {cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
