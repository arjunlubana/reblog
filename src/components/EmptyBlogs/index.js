import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function EmptyBlogs() {
  return (
    <Link
      to="/blog/new"
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-muted text-decoration-none text-center"
    >
      <div>
        Oops...No blogs found!
        <br /> Click to Add
      </div>
      <IconContext.Provider value={{ color: "var(--bs-green)", size: "80px" }}>
        <IoAddOutline />
      </IconContext.Provider>
    </Link>
  );
}
