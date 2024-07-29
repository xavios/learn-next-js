import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";

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
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/meals/hamburger">A nice greasy hamburger!</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
            <li>
              <Link href="/meals/share">Share meals</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
