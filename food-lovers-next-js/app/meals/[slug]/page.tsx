import React from "react";
import Link from "next/link";
import { getMeal } from "@/lib/get-meals";
import classes from "./page.module.css";
import Image from "next/image";
import { Meal } from "@/components/meals/mealType";

const page = ({ params }: { params: { slug: string } }) => {
  const meal = getMeal(params.slug) as Meal;
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill alt={meal.slug} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <div
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        />
      </main>
    </>
  );
};

export default page;
