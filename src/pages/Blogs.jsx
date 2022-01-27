import { Link } from "react-router-dom";

export default function Blogs({blogs}) {
  
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
            <Link to={`/blogs/${blog.id}`} className="stretched-link" />
          </div>
        </div>
      ))}
    </div>
  );
}
