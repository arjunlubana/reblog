import { Link } from "react-router-dom";
import ProfileImage from "./ProfileImage";
import { FaPlusCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand active" aria-current="page" to="/">
            Reblog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
            <ul className="navbar-nav justify-content-center align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/addblog">
                  <IconContext.Provider
                    value={{ color: "var(--bs-green)", size: "2rem" }}
                  >
                    <FaPlusCircle />
                  </IconContext.Provider>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <ProfileImage dimensions="2rem" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
