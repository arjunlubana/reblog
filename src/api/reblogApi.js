import axios from "axios";

let AUTH_TOKEN = "jfseuihfkewjfnodfojsdnfe8343jknjkfnsoif93n"

const reblogApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 1000,
  headers: { common: ["Authorization"] },
});

// Overriding Config Defaults
reblogApi.defaults.headers.post['Authorization'] = AUTH_TOKEN;
reblogApi.defaults.headers.post['Content-Type'] = 'application/json';

export default reblogApi;
