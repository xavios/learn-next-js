import { News } from "@/lib/news";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface NewsArticleProps {
  news: News;
}

const NewsArticle: FC<NewsArticleProps> = ({ news }) => {
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
};

export default NewsArticle;
