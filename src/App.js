// eslint-disable-next-line
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}
