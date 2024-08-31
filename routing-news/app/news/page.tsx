import React from "react";
import { LatestNews } from "@/lib/news";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <main className="news-list">
      {LatestNews.map((news) => {
        const alt = news?.title ?? "";

        return (
          <section key={news.id} className="news-article">
            <time>{news.time.toDateString()}</time>
            <hr />
            <div>
              <Image
                src={`/images/news/${news?.image}`}
                alt={alt}
                width="300"
                height="150"
              />
            </div>
            <section>{news.title}</section>
            <hr />
            <Link href={`/news/${news.slug}`}>See more...</Link>
          </section>
        );
      })}
    </main>
  );
};

export default Page;
