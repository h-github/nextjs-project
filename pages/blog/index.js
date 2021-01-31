import Head from "next/head";
import Link from "next/link";
const Blog = () => {
  return (
    <>
      <Head>
        <title>My Blog Posts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Link href="/">
        <a>Go back home</a>
      </Link>
      <h1>Welcome to My Blog</h1>
    </>
  );
};

export default Blog;
