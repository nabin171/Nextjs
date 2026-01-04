import { useRouter } from "next/router";
import React from "react";

const Blog = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return <div>this one is slug page from the blog{slug}</div>;
};

export default Blog;
