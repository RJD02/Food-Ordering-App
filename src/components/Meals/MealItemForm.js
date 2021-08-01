import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
export default function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    console.log("Submitted");
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const eneteredAMountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      eneteredAMountNumber < 1 ||
      eneteredAMountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(eneteredAMountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add+</button>
      {!amountIsValid && <p>Enter a valid amount(1-5)</p>}
    </form>
  );
}
