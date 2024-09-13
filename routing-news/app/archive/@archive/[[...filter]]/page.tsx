import React from "react";
import { getNewsOfYear } from "@/lib/time-helper";
import { LatestNews } from "@/lib/news";
import NewsArticle from "@/components/news-article";
import {
  getAvailableYears,
  getNewsOfYearAndMonth,
  getAvailableMonths,
} from "@/lib/time-helper";
import Link from "next/link";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const NewsOfYear = ({ params }: { params: { filter: string[] } }) => {
  const selectedYear =
    params.filter && params.filter.length > 0 ? params.filter[0] : undefined;
  const selectedMonth =
    params.filter && params.filter.length > 1 ? params.filter[1] : undefined;

  validateFilters(selectedYear, selectedMonth, params.filter);

  let headerMenu: React.ReactNode = <></>;
  let news: React.ReactNode = <p>No news found for the selected period.</p>;

  if (!selectedYear && !selectedMonth) {
    headerMenu = getAvailableYears(LatestNews).map((year) => (
      <li key={year}>
        <Link href={`/archive/${year}`}>{year}</Link>
      </li>
    ));
  }

  if (selectedYear && !selectedMonth) {
    headerMenu = getAvailableMonths(LatestNews, parseInt(selectedYear)).map(
      (month) => (
        <li key={month}>
          <Link
            href={`/archive/${selectedYear}/${month}`}
          >{`${monthNames[month]}`}</Link>
        </li>
      )
    );
    news = getNewsOfYear(LatestNews, parseInt(selectedYear)).map((news) => (
      <NewsArticle key={news.id} news={news} />
    ));
  }

  if (selectedYear && selectedMonth) {
    headerMenu = (
      <p>
        <Link href="/archive">Back to the archive...</Link>
      </p>
    );
    news = getNewsOfYearAndMonth(
      LatestNews,
      parseInt(selectedYear),
      parseInt(selectedMonth)
    ).map((news) => <NewsArticle key={news.id} news={news} />);
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>{headerMenu}</ul>
        </nav>
      </header>
      <div className="news-list">{news}</div>
    </>
  );
};

export default NewsOfYear;

function validateFilters(
  selectedYear: string | undefined,
  selectedMonth: string | undefined,
  filters: string[]
) {
  const invalidFilterParamsErr = new Error(
    "Problem with the url filter segments."
  );
  const availableYears = getAvailableYears(LatestNews);
  if (selectedYear && !availableYears.includes(parseInt(selectedYear))) {
    throw invalidFilterParamsErr;
  }

  if (selectedYear && selectedMonth) {
    const availableMonths = getAvailableMonths(
      LatestNews,
      parseInt(selectedYear)
    );
    if (!availableMonths.includes(parseInt(selectedMonth))) {
      throw invalidFilterParamsErr;
    }
  }

  if (filters && filters.length > 2) {
    throw invalidFilterParamsErr;
  }
}
