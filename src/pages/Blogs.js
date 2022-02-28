import { Link } from "react-router-dom";
import { Spinner } from "../components";
import api_url from "../lib/api-url"

export default function Blogs({blogs, isLoading}) {

  return isLoading ? (
    <div className="vh-100">
      <Spinner />
    </div>
  ) : (
    <div className="container-fluid w-75 mx-auto" id="blogs">
      <h1 className="text-center">Blogs</h1>
      {blogs.map((blog) => (
        <div className="card d-flex flex-row" key={blog.id}>
          <img src={`${api_url}/${blog.cover.filename}`} className="card-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={`/blog/${blog.id}`} className="stretched-link" />
          </div>
        </div>
      ))}
    </div>
  );
}
