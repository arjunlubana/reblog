import reblogApi from "./reblogApi";

async function getBlogs() {
  const response = await reblogApi.get("/blogs");
  return response.data;
}

async function getDrafts() {
  const response = await reblogApi.get("/blogs/drafts");
  return response.data;
}

async function getBlog(id) {
  const response = await reblogApi.get(`/blogs/${id}`);
  return response.data;
}

async function createBlog(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/blogs/new`,
    requestOptions
  );
  const result = await response.json();
  return result;
}

async function updateBlog(id, data) {
  const requestOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/blogs/${id}`,
    requestOptions
  );
  const result = await response.json();
  return result;
}

async function deleteBlog(id) {
  let requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };
  await fetch(`${process.env.REACT_APP_API_URL}/blogs/${id}`, requestOptions);
}

export { getBlogs, getDrafts, getBlog, createBlog, updateBlog, deleteBlog };
