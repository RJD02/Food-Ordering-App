import React, { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";

export default function HeaderCardButton(props) {
  return (
    <Fragment>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>{props.children}</span>
        <span className={classes.badge}>{props.numItems}</span>
      </button>
    </Fragment>
  );
}
