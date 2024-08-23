import React from "react";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header id="main-header">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/news">Latest News</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
