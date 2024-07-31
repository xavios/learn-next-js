import React from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/mealGrid";
import testImg from "@/assets/burger.jpg";
import testImg1 from "@/assets/schnitzel.jpg";

const Meals = () => {
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
        <MealGrid
          meals={[
            {
              slug: "hello",
              title: "A nice burger",
              image: testImg,
              summary: "just a test burger to chew on",
              creator: "QA department",
            },
            {
              slug: "test2",
              title: "Schnitzel",
              image: testImg1,
              summary: "just a schnitzel to suck on?!",
              creator: "QA department",
            },
          ]}
        />
      </main>
    </>
  );
};

export default Meals;
