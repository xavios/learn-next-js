import React, { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/mealGrid";
import getMeals from "@/lib/get-meals";
import LoadingMeals from "./loading-meals";
import { Meal } from "@/components/meals/mealType";

async function Meals() {
  const meals = (await getMeals()) as Meal[];
  return <MealGrid meals={meals} />;
}

const MealsPage = async () => {
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
        <Suspense fallback={<LoadingMeals />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
