// eslint-disable-next-line
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import { LoggedContext } from "./lib/login-context";

export default function App() {
  return (
    <Router>
      <LoggedContext.Provider value={true}>
        <Home />
      </LoggedContext.Provider>
    </Router>
  );
}
