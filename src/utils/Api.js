let BASE_URL;

BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : (BASE_URL = "http://localhost:5000");

export default BASE_URL;