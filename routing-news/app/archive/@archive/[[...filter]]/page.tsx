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
  const selectedYear = params.filter ? params.filter[0] : undefined;
  const selectedMonth =
    params.filter && params.filter.length > 1 ? params.filter[1] : undefined;

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
