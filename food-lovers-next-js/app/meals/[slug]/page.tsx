import React from "react";
import Link from "next/link";
import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import { Meal } from "@/components/meals/mealType";
import { notFound } from "next/navigation";
import { deleteMeal } from "@/lib/actions";

const page = ({ params }: { params: { slug: string } }) => {
  const meal = getMeal(params.slug) as Meal;

  if (!meal) {
    notFound();
  }

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
        <form action={deleteMeal}>
          <button
            type="submit"
            style={{
              width: "50px",
              height: "50px",
              display: "inline-block",
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              background: "linear-gradient(90deg, #f9572a, #ff9b05)",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            🗑️
          </button>
          <input type="hidden" name="slug" value={meal.slug} />
        </form>
      </main>
    </>
  );
};

export default page;
