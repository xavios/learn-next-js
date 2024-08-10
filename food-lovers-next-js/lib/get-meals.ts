import db from "better-sqlite3";

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

  if (randomInteger(1, 10) > 5) {
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
