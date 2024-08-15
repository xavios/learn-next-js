"use server";

import { Meal } from "@/components/meals/mealType";
import { saveMeal } from "./meals";

export async function shareMeal(formData: FormData) {
  const formEntries = Object.fromEntries(formData);
  const meal = {
    slug: "",
    creator: formEntries["name"] as string,
    creator_email: formEntries["email"] as string,
    title: formEntries["title"] as string,
    summary: formEntries["summary"] as string,
    instructions: formEntries["instructions"] as string,
    image: formEntries["image-picker"] as string,
  } as Meal;

  meal.image = "/images/curry.jpg";

  saveMeal(meal);
}
