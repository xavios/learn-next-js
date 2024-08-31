import React from "react";
import { LatestNews } from "@/lib/news";
import { notFound } from "next/navigation";

const page = ({ params }: { params: { slug: string } }) => {
  const news = LatestNews.find((news) => news.slug === params.slug);
  if (!news) {
    notFound();
  }
  return (
    <main>
      <div className="news-article">
        <h1>{news?.title}</h1>
        <time>{news?.time.toDateString()}</time>
        <p>{news?.content}</p>
      </div>
    </main>
  );
};

export default page;
