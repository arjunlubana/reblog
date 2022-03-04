import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { convertFromRaw } from "draft-js";
import { Spinner } from "../components";
import api_url from "../lib/api-url";
import { getBlogs } from "../lib/blog-crud";

export default function Blogs({ blogs, setBlogs }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const blogsData = await getBlogs();
      setBlogs(blogsData);
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <div className="vh-100">
      <Spinner />
    </div>
  ) : (
    <div className="container-fluid" id="blogs">
      <h1 className="text-center">Blogs</h1>
      {blogs.map((blog) => (
        <div
          className="card d-flex flex-column w-50 h-50 mx-auto"
          key={blog.id}
        >
          <img
            src={blog.cover ? `${api_url}/${blog.cover.filename}` : ""}
            className=" w-100"
            alt="Blog Cover"
          />
          <div className="card-body">
            <h5 className="card-title">
              {convertFromRaw(blog.title).getFirstBlock().getText()}
            </h5>
            <p className="card-text">
              {convertFromRaw(blog.body).getFirstBlock().getText()}
            </p>
            <Link to={`/blog/${blog.id}`} className="stretched-link" />
          </div>
        </div>
      ))}
    </div>
  );
}
