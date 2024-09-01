import React from "react";
import { LatestNews } from "@/lib/news";
import { getAvailableYears } from "@/lib/time-helper";

const Archive = () => {
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {getAvailableYears(LatestNews).map((year) => (
            <li key={year}>{year}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Archive;
