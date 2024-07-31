import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import { usePathname } from "next/navigation";
import HeaderLink from "./HeaderLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src={logoImage}
            alt="A plate with food on it."
            priority={true}
          />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <HeaderLink href="/meals" text="Meals" />
            </li>
            <li>
              <HeaderLink
                href="/meals/hamburger"
                text="A nice greasy hamburger!"
              />
            </li>
            <li>
              <HeaderLink href="/community" text="Community" />
            </li>
            <li>
              <HeaderLink href="/meals/share" text="Share meals" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
