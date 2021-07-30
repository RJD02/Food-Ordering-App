import React from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./Cart.module.css";
import Modal from "./Modal";
export default function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: uuidv4(), name: "Faluda", amount: 2, price: 2 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.23</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
