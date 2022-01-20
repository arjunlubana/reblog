async function LoginUser(email, password) {
    const response = await fetch("http://localhost:5000/auth/login", {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({"username":email, "password": password})
    });
    return response.json();
}

export default LoginUser;