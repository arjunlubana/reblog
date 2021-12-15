import { useState } from "react";
import BlogEditor from "../components/BlogEditor";

export default function NewBlog() {
  return (
    <div className="card w-75 mx-auto my-4">
      <BlogEditor/>
    </div>
  );
}
