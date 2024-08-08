import React from "react";
import classes from "./mealGrid.module.css";
import MealItem from "./mealItem";
import { Meal } from "@/components/meals/mealType";

const MealGrid = ({ meals }: { meals: Meal[] }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.slug}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealGrid;
