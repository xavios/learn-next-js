"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./HeaderLink.module.css";

const HeaderLink = ({ href, text }: { href: string; text: string }) => {
  const path = usePathname();
  return (
    <Link href={href} className={path === href ? classes.active : undefined}>
      {text}
    </Link>
  );
};

export default HeaderLink;
