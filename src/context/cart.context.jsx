import { createContext, useState, useReducer } from "react";

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

const CART_ITEM_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IN_CART_OPEN",
};

const INITIAL_STATE_CART = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ITEM_ACTION_TYPES.SET_CART_ITEMS: {
      return {
        ...state,
        ...payload,
      };
    }
    case CART_ITEM_ACTION_TYPES.SET_IS_CART_OPEN: {
      return {
        ...state,
        isCartOpen: payload,
      };
    }
    default:
      throw new Error("Unhandle type of in CartReducer");
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal , isCartOpen }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE_CART
  );

  const updateCartItemsReducer = (newCartItems) => {
  
    const newCartCount = newCartItems.reduce((total , cartItem) => total + cartItem.quantity, 0);

  
    const newCartTotal = newCartItems.reduce((total , cartItem) => total +cartItem.quantity * cartItem.price, 0);

    dispatch({
      type: CART_ITEM_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemToCart = (productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch({ type: CART_ITEM_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
  };

  const value = {
    isCartOpen ,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemToCart,
    clearItemToCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
