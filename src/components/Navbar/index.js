import { Link } from "react-router-dom";
import { AuthUserNav } from "components";

export default function Navbar({ setLogged }) {
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
              <AuthUserNav setLogged={setLogged} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
