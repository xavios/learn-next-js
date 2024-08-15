"use server";

import { Meal } from "@/components/meals/mealType";
import { saveMeal, deleteMeal as dbDeleteMeal } from "./meals";
import slugify from "slugify";
import fs from "node:fs";
import { redirect } from "next/navigation";

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
  meal.slug = slugify(meal.title, { lower: true });

  const image = formEntries["image-picker"] as File;
  const extension = image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const writeStream = fs.createWriteStream(`public/images/${fileName}`);

  const arrayBuffer = await image.arrayBuffer();
  writeStream.write(Buffer.from(arrayBuffer), (err) => {
    if (err) {
      throw new Error(`image upload failed: ${JSON.stringify(err)}`);
    }
  });

  meal.image = `/images/${fileName}`;

  saveMeal(meal);

  redirect("/meals");
}

export async function deleteMeal(formData: FormData) {
  const formEntries = Object.fromEntries(formData);
  dbDeleteMeal(formEntries["slug"] as string);
  redirect("/meals");
}
