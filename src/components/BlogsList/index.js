import { Link } from "react-router-dom";
import { convertFromRaw } from "draft-js";
import { EmptyBlogs } from "components";
import { BASE_URL, FILES_URI } from "utils/Api";
import "./styles.css";

export default function BlogsList({ blogs }) {
  return blogs.length === 0 ? (
    <EmptyBlogs />
  ) : (
    <div className="mt-5" id="blogs">
      {blogs.map((blog) => (
        <div className="card" key={blog.id}>
          <img
            src={blog.cover ? BASE_URL + FILES_URI + blog.cover : ""}
            className="card-img-top"
            alt="Blog Cover"
          />
          <div className="card-body">
            <h5 className="card-title text-center">
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
