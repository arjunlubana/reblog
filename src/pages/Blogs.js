import { Link, Outlet } from "react-router-dom";
import { getBlogsData } from "../functions/blogCrud";
import { useState, useEffect } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogsData = getBlogsData();
    setBlogs(blogsData)
  }, [blogs]);

  return (
    <div className="container-fluid w-75 mx-auto" id="blogs">
      <h1 className="text-center">Blogs</h1>
      {blogs.map((blog) => (
        <div className="card d-flex flex-row" key={blog.id}>
          <img src="./assets/image1.jpg" className="card-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={`/blog/${blog.id}`} className="stretched-link"></Link>
          </div>
        </div>
      ))}
      <Outlet></Outlet>
    </div>
  );
}
