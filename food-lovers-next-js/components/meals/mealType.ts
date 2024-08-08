import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Meal {
  title: string;
  slug: string;
  image: StaticImport;
  summary: string;
  creator: string;
}
