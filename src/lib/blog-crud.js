import api_url from "./api-url";

export async function getBlogs() {
  const result = await fetch(`${api_url}/api/blogs`);
  const blogs = await result.json();
  return blogs;
}

export async function getBlog(id) {
  const result = await fetch(`${api_url}/api/blogs/${id}`);
  const blog = await result.json();
  return blog;
}

export async function createBlog(blog_data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog_data),
    redirect: "follow",
  };

  const response = await fetch(`${api_url}/api/blogs/new`, requestOptions);
  const result = await response.json();
  return result;
}

export async function updateBlog(id, blog_data) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog_data),
    redirect: "follow",
  };

  await fetch(`${api_url}/api/blogs/${id}/update`, requestOptions);
}

export async function deleteBlog(id) {
  let requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  const response = await fetch(
    `${api_url}/api/blogs/${id}/delete`,
    requestOptions
  );
}
