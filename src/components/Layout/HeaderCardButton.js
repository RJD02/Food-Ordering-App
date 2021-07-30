import React, { Fragment, useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import CartContext from "../../store/Cart-Context";
export default function HeaderCardButton(props) {
  const ctx = useContext(CartContext);
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{ctx.totalAmount}</span>
      </button>
    </Fragment>
  );
}
