import * as data from "../mockdata/users.json";

export default function LoginUser(email, password) {
  const users = data["default"];
  const user = users
    .filter((user) => user["email"] === email)
    .filter((user) => user["password"] === password);
}
