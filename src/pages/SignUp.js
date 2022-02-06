import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="card w-25 my-5 mx-auto p-4">
      <div className="text-center fs-4">Reblog</div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="card-body d-flex flex-column gap-1"
      >
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" name="password" id="password" />
        <input
          type="submit"
          value="Sign Up"
          className="w-50 mx-auto btn btn-info"
        />
      </form>
      <small>Already have an account? <Link to="/login">Login</Link></small>
    </div>
  );
}
