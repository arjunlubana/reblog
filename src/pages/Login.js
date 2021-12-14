export default function Login() {
  return (
    <div className="card w-25 my-5 mx-auto">
      <div className="text-center fs-4">Reblog</div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="card-body d-flex flex-column gap-1"
      >
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="Login" className="w-25 mx-auto btn btn-success"/>
      </form>
    </div>
  );
}
