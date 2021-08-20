import React from "react";
import Card from "../UI/Card";
import classes from "./MealItem.module.css";
export default function MealItem(props) {
  return (
    <Card classes={classes.meal}>
      <h3>{props.meal}</h3>
      <p className={classes.description}>{props.description}</p>
      <span className={classes.price}>{props.price}</span>
    </Card>
  );
}
