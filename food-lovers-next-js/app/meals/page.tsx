import React from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/mealGrid";
import getMeals from "@/lib/get-meals";

const Meals = async () => {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself! It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main>
        <MealGrid meals={meals} />
      </main>
    </>
  );
};

export default Meals;
