import React from "react";
import { LatestNews } from "@/lib/news";
import Link from "next/link";

const Page = () => {
  return (
    <main className="news-list" id="page">
      {LatestNews.map((news) => (
        <section key={news.id} className="news-article">
          <header>{news.time.toDateString()}</header>
          <hr />
          <section>{news.title}</section>
          <hr />
          <Link href={`/news/${news.id}`}>See more...</Link>
        </section>
      ))}
    </main>
  );
};

export default Page;
