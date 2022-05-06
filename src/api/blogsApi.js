async function getBlogs() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/blogs`);
  const result = await response.json();
  return result;
}

async function getDrafts() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/blogs/drafts`);
  const result = await response.json();
  return result;
}

async function getBlog(id) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/blogs/${id}`);
  const result = await response.json();
  return result;
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
