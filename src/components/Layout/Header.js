import React from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table of delicious food" />
      </div>
    </React.Fragment>
  );
}
