import React from "react";
import Link from "next/link";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <main>
      <h1>{params.slug}</h1>
      <Link href="/">Back to home</Link>
    </main>
  );
};

export default page;
