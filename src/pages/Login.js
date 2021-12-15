import { Link } from "react-router-dom";
import { useState } from "react";
import LoginUser from "../functions/loginUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "email"){
      setEmail(value)
    }else if (name === "password"){
      setPassword(value)
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    LoginUser(email, password)
    
  };
  return (
    <div className="card w-25 my-5 mx-auto p-4">
      <div className="text-center fs-4">Reblog</div>
      <form
        onSubmit={handleSubmit}
        className="card-body d-flex flex-column gap-1"
      >
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Login"
          className="w-50 mx-auto btn btn-success"
        />
      </form>
      <small>
        <Link to="/">Forgot Password ?</Link>
      </small>
    </div>
  );
}
