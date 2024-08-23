import React from "react";
import { LatestNews } from "@/lib/news";

const page = ({ params }: { params: { id: string } }) => {
  const news = LatestNews.find((news) => news.id === parseInt(params.id));
  return (
    <main id="page">
      <div className="news-article">
        <h1>{news?.title}</h1>
        <p>{news?.time.toDateString()}</p>
        <p>{news?.content}</p>
      </div>
    </main>
  );
};

export default page;
