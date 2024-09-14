import Link from "next/link";
import HeaderLink from "./header-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <HeaderLink href="/news" text="News" />
          <HeaderLink href="/archive" text="Archive" />
        </ul>
      </nav>
    </header>
  );
}
