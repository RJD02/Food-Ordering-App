import React from "react";
import AvalilableMeals from "./AvalilableMeals";
import MealsSummary from "./MealsSummary";

export default function Meals() {
  return (
    <div>
      <MealsSummary />
      <AvalilableMeals />
    </div>
  );
}
