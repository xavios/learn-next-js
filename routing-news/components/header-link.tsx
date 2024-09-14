"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLink = ({ href, text }: { href: string; text: string }) => {
  const path = usePathname();

  return (
    <li>
      <Link href={href} className={path.includes(href) ? "active" : ""}>
        {text}
      </Link>
    </li>
  );
};

export default HeaderLink;
