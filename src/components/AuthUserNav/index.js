import { useContext } from "react";
import { LoggedContext } from "utils/login-context";
import { Link } from "react-router-dom";
import { Avatar } from "components";
import {
  IoAddOutline,
  IoLogOutOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { IconContext } from "react-icons";

export default function AuthUserNav({ setLogged }) {
  const logged = useContext(LoggedContext);

  if (logged) {
    return (
      <IconContext.Provider value={{ color: "var(--bs-green)", size: "32px" }}>
        <li className="nav-item">
          <Link className="nav-link" to="blog/new">
            <IoAddOutline />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="drafts">
            <IoDocumentTextOutline />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            <Avatar dimensions="32px" />
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={() => setLogged(false)} role="button" to="/login">
            <IoLogOutOutline />
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
