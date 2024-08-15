"use server";

import { Meal } from "@/components/meals/mealType";
import { saveMeal, deleteMeal as dbDeleteMeal } from "./meals";
import slugify from "slugify";
import fs from "node:fs";
import { redirect } from "next/navigation";

function invalidText(text: string) {
  return !text || text.trim() === "";
}

export async function shareMeal(formData: FormData) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

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

  validateMeal(meal);

  const fileName = await saveImage(formEntries, meal);

  meal.image = `/images/${fileName}`;

  saveMeal(meal);

  redirect("/meals");
}

function validateMeal(meal: Meal) {
  for (const [key, value] of Object.entries(meal)) {
    if (key === "creator_email") {
      if (!value.indexOf("@")) {
        throw new Error("Email must contain a @ symbol!");
      }
      continue;
    }
    if (key === "image-picker") {
      if (!value || (value as File).size === 0) {
        throw new Error("Image is empty!");
      }
    }
    if (invalidText(value)) {
      throw new Error(`Invalid ${key} value provided`);
    }
  }
}

async function saveImage(
  formEntries: { [k: string]: FormDataEntryValue },
  meal: Meal
) {
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
  return fileName;
}

export async function deleteMeal(formData: FormData) {
  const formEntries = Object.fromEntries(formData);
  dbDeleteMeal(formEntries["slug"] as string);
  redirect("/meals");
}
