import React from "react";
import { getNewsOfYear } from "@/lib/time-helper";
import { LatestNews } from "@/lib/news";
import NewsArticle from "@/components/news-article";

const NewsOfYear = ({ params }: { params: { year: string } }) => {
  const news = getNewsOfYear(LatestNews, parseInt(params.year));
  return (
    <div className="news-list">
      {news.map((news) => (
        <NewsArticle key={news.id} news={news} />
      ))}
    </div>
  );
};

export default NewsOfYear;
