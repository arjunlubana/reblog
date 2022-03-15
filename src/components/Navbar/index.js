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
            aria-label="Toggle navigation"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="sidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="
              offcanvas offcanvas-start
              bg-dark
              text-white
              align-items-lg-end
            "
            tabIndex="-1"
            id="sidebar"
            aria-labelledby="sidebarLabel"
            data-bs-scroll="true"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Reblog</h5>
              <button
                type="button"
                className="btn-close btn-close-white text-reset fill-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body" data-bs-dismiss="offcanvas">
              <ul className="navbar-nav justify-content-center align-items-center">
                <AuthUserNav setLogged={setLogged} />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}