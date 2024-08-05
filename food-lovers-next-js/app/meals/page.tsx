import React from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/mealGrid";
import db from "better-sqlite3";

const Meals = () => {
  const mealsDb = db("././meals.db");
  const meals = mealsDb.prepare("SELECT * FROM meals;").all();

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
