import { News } from "@/lib/news";

export function getAvailableYears(news: News[]): number[] {
  const years = news.map((news) => {
    return news.time.getFullYear();
  });
  const uniqueYears: any = {};
  for (const year of years) {
    uniqueYears[year] = year;
  }
  const uniqueYearsArr: number[] = [];
  for (const year in uniqueYears) {
    uniqueYearsArr.push(uniqueYears[year]);
  }
  return uniqueYearsArr.sort();
}
