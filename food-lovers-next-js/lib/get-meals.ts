import db from "better-sqlite3";

export default async function getMeals() {
    console.log("start:",new Date());
    await new Promise((resolve) => {setTimeout(resolve, 2000)})
    console.log("end:",new Date());

    const mealsDb = db("././meals.db");
    return mealsDb.prepare("SELECT * FROM meals;").all();
}