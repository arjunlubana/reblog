let BASE_URL;

if (process.env.NODE_ENV === "production") {
  BASE_URL = process.env.REACT_APP_API_URL;
} else {
  BASE_URL = "http://localhost:5000";
}

export default BASE_URL;
