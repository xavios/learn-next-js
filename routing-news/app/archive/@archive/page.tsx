import React from "react";
import { LatestNews } from "@/lib/news";
import { getAvailableYears } from "@/lib/time-helper";
import Link from "next/link";

const Archive = () => {
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {getAvailableYears(LatestNews).map((year) => (
            <li key={year}>
              <Link href={`/archive/${year}`}>{year}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Archive;
