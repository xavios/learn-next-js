import React from "react";
import { LatestNews } from "@/lib/news";
import NewsArticle from "@/components/news-article";

const Page = () => {
  return (
    <main className="news-list">
      {LatestNews.map((news) => (
        <NewsArticle key={news.id} news={news} />
      ))}
    </main>
  );
};

export default Page;
