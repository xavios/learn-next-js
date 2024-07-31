import React from "react";
import classes from "./mealGrid.module.css";
import MealItem from "./mealItem";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const MealGrid = ({
  meals,
}: {
  meals: [
    {
      title: string;
      slug: string;
      image: StaticImport;
      summary: string;
      creator: string;
    }
  ];
}) => {
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
