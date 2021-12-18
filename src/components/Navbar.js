import { Link } from "react-router-dom";
import Navigation from "./Navigation";


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
          <Navigation />
        </div>
      </nav>
    </header>
  );
}
