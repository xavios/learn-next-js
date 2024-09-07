import React from "react";
import { getLatestNews } from "@/lib/time-helper";
import { LatestNews } from "@/lib/news";
import NewsArticle from "@/components/news-article";

export const Default = () => {
  const latest = getLatestNews(LatestNews);
  return (
    <>
      <h2>Latest News</h2>
      <div className="news-list">
        {latest.map((news) => (
          <NewsArticle key={news.id} news={news} />
        ))}
      </div>
    </>
  );
};

export default Default;
