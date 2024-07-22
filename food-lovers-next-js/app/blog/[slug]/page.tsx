import Link from "next/link";
import { PropsWithoutRef } from "react";

const BlogPosts = (props: PropsWithoutRef<any>) => {
  return (
    <main>
      <h1>Welcome to my {props.params.slug} blog entry!</h1>
      <p>
        <Link href="/blog">Back</Link>
      </p>
    </main>
  );
};

export default BlogPosts;
