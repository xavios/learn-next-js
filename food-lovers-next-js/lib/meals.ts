import { Meal } from "@/components/meals/mealType";
import db from "better-sqlite3";
import xss from "xss";

export function randomInteger(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

const database = db("././meals.db");

export default async function getMeals() {
  console.log("start:", new Date());
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  console.log("end:", new Date());

  if (randomInteger(1, 10) > 7 && process.env.NODE_ENV !== "production") {
    throw new Error(
      `A random error has been thrown to check the error handling capabilities
      of NextJs.`
    );
  }

  return database.prepare("SELECT * FROM meals;").all();
}

export function getMeal(slug: string) {
  return database.prepare("SELECT * FROM meals where slug = ?").get(slug);
}

export function saveMeal(meal: Meal) {
  meal.instructions = xss(meal.instructions);

  database
    .prepare(
      `INSERT INTO meals VALUES (
        null,
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @creator_email
      )`
    )
    .run(meal);
}

export function deleteMeal(slug: string) {
  database.prepare("DELETE FROM meals WHERE slug = ?").run(slug);
}
