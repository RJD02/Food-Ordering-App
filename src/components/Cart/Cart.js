import React from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./Cart.module.css";
export default function Cart() {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: uuidv4(), name: "Faluda", amount: 2, price: 2 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.23</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}
