import axios from "axios";

const reblogApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 1000,
});

// Overriding Config Defaults
reblogApi.defaults.headers.post['Content-Type'] = 'application/json';

export default reblogApi;
