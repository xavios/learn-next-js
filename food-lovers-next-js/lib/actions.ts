"use server";

export async function shareMeal(formData: FormData) {
  const formEntries = Object.fromEntries(formData);
  console.log({
    creator: formEntries["name"],
    email: formEntries["email"],
    title: formEntries["title"],
    summary: formEntries["summary"],
    instructions: formEntries["instructions"],
    image: formEntries["image-picker"],
  });
}
