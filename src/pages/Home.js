import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
export default function Home({ setLogged }) {
  return (
    <div>
      <Navbar setLogged={setLogged} />
      <Outlet />
    </div>
  );
}
