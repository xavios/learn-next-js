import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Meal {
  title: string;
  slug: string;
  image: StaticImport | string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}
