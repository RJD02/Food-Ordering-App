import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div>
          <p className={classes.description}>{props.description}</p>
        </div>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
}
