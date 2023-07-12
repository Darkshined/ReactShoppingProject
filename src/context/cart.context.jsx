import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingToRemoveCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingToRemoveCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) => {
  const existingToClearCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToClear.id
  );
  if (existingToClearCartItem.quantity > 0) {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemToCart: () => {},
  itemCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  //This is the item counter

  useEffect(() => {
    const counter = (initial, sum) => {
      return initial + sum.quantity;
    };

    const itemCounter = cartItems.reduce(counter, 0);

    setItemCount(itemCounter);
  }, [cartItems]); 

  // This calculates the total price of items 

  useEffect(() => {
    const totalPrice = (initial, sum) => {
      return initial + sum.quantity * sum.price;
    };
    const itemTotal = cartItems.reduce(totalPrice, 0);

    setCartTotal(itemTotal);
  }, [cartItems]); 

  
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemToCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    itemCount,
    removeItemToCart,
    clearItemToCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
