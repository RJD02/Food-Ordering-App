import React, { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";

export default function HeaderCardButton(props) {
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </Fragment>
  );
}
