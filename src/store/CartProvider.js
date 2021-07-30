import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

export default function CartProvider(props) {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = (item) => {
    cartDispatch({
      type: "ADD",
      item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    cartDispatch({
      type: "REMOVE",
      id,
    });
  };
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
