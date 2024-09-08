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

export function getNewsOfYear(news: News[], year: number): News[] {
  return news.filter((news) => news.time.getFullYear() === year);
}

export function getLatestNews(news: News[]): News[] {
  const latestNews = [...news];
  latestNews.sort((a: News, b: News) => {
    if (a.time > b.time) {
      return -1;
    } else if (b.time > a.time) {
      return 1;
    }
    return 0;
  });
  return latestNews.slice(0, 3);
}

export function getAvailableMonths(news: News[], year: number): number[] {
  const allMonths = news
    .filter((news) => news.time.getFullYear() === year)
    .map((news) => news.time.getMonth());
  const uniqueMonths: any = {};
  for (const month of allMonths) {
    uniqueMonths[month] = month;
  }
  const uniqueMonthsArr: number[] = [];
  for (const month in uniqueMonths) {
    uniqueMonthsArr.push(parseInt(month));
  }
  return uniqueMonthsArr.sort();
}

export function getNewsOfYearAndMonth(
  news: News[],
  year: number,
  month: number
): News[] {
  return news.filter(
    (news) => news.time.getFullYear() === year && news.time.getMonth() === month
  );
}
