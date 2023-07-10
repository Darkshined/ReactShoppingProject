import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-items.style.jsx";
import { CheckoutItemContainer, ImageContainer } from "./checkout-items.style.jsx";


const Checkoutitems = ({ cartItem }) => {
  const { clearItemToCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const { imageUrl, name, price, quantity } = cartItem;

  const clearItemHandler = () => clearItemToCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="current-item"></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default Checkoutitems;
