import { useContext } from "react";
import { LoggedContext } from "../functions/login-context";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { FaPlusCircle, FaSignOutAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function AuthUserNav({ setLogged }) {
  const logged = useContext(LoggedContext);

  if (logged) {
    return (
      <IconContext.Provider value={{ color: "var(--bs-green)", size: "2rem" }}>
        <li className="nav-item">
          <Link className="nav-link" to="/newblog">
            <FaPlusCircle />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            <Avatar dimensions="2rem" />
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={() => setLogged(false)} role="button" to="/login">
            <FaSignOutAlt />
          </Link>
        </li>
      </IconContext.Provider>
    );
  } else {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Create Account
          </Link>
        </li>
      </>
    );
  }
}
