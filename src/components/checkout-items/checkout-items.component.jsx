import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-items.style.jsx";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-items.style";

const Checkoutitems = ({ cartItem }) => {
  const { clearItemToCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const { imageUrl, name, price, quantity } = cartItem;

  const clearItemHandler = () => clearItemToCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="current-item"></img>
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}> &#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}> &#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default Checkoutitems;
