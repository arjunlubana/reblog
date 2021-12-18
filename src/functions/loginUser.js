const users = [
  {
    "id": 1,
    "first_name": "Arjun",
    "last_name": "Lubana",
    "DoB": "19/06/1999)",
    "email": "arjunlubana562@gmail.com",
    "address": "Kisumu",
    "gender": "Male",
    "password": "123"
  },
  {
    "id": 2,
    "name": "Arjun",
    "last_name": "Lubana",
    "DoB": "19/06/1999)",
    "gender": "Male",
    "email": "graysoncarter1999@gmail.com",
    "address": "Kisumu",
    "password": "Hello123"
  }
]


export default function LoginUser(email, password) {
  const user = users
    .filter((user) => user["email"] === email)
    .filter((user) => user["password"] === password);
  return (user.length >= 1 ? true :false);
}
