import {BASE_URL} from "utils/Api";

export async function getBlogs() {
  const response = await fetch(`${BASE_URL}/api/blogs`);
  const result = await response.json();
  return result;
}

export async function getDrafts() {
  const response = await fetch(`${BASE_URL}/api/blogs/drafts`);
  const result = await response.json();
  return result;
}

export async function getBlog(id) {
  const response = await fetch(`${BASE_URL}/api/blogs/${id}`);
  const result = await response.json();
  return result;
}

export async function createBlog(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(`${BASE_URL}/api/blogs/new`, requestOptions);
  const result = await response.json();
  return result;
}

export async function updateBlog(id, data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${BASE_URL}/api/blogs/${id}`, requestOptions);
  const result = await response.json();
  return result;
}

export async function deleteBlog(id) {
  let requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };
  await fetch(`${BASE_URL}/api/blogs/${id}`, requestOptions);
}
