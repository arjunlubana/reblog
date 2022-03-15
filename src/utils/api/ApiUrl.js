export let BASE_URL;

BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : (BASE_URL = "http://localhost:5000/");

export const FILES_URI = "files/"
export const BLOGS_URI = "blogs"
export const USER_URI = "users"