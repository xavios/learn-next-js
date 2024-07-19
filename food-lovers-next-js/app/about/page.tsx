import Link from "next/link";

const page = () => {
  return (
    <main>
      <h1>About us...</h1>
      <p>
        <Link href="/">Take me home!</Link>
      </p>
    </main>
  );
};

export default page;
