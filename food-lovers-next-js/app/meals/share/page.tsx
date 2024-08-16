"use client";

import ImagePicker from "@/components/meals/imagePicker";
import classes from "./page.module.css";
import { shareMeal, ShareMealFormState } from "@/lib/actions";
import ShareMealButton from "@/components/meals/shareMealButton";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
  const [formState, formAction] = useFormState<ShareMealFormState, FormData>(
    shareMeal,
    { message: "" }
  );

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            />
          </p>
          <ImagePicker name="image-picker" />
          {formState.message !== "" && <p>{formState.message}</p>}
          <p className={classes.actions}>
            <ShareMealButton />
          </p>
        </form>
      </main>
    </>
  );
}
