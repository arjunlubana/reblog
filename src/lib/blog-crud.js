import BASE_URL from "lib/api-url";

export async function getBlogs() {
  const result = await fetch(`${BASE_URL}/api/blogs`);
  const blogs = await result.json();
  return blogs;
}

export async function getDrafts() {
  const result = await fetch(`${BASE_URL}/api/blogs/drafts`);
  const blogs = await result.json();
  return blogs;
}

export async function getBlog(id) {
  const result = await fetch(`${BASE_URL}/api/blogs/${id}`);
  const blog = await result.json();
  return blog;
}

export async function createBlog(blog_data) {
  const requestOptions = {
    method: "POST",
    body: blog_data,
  };

  const response = await fetch(`${BASE_URL}/api/blogs/new`, requestOptions);
  const result = await response.json();
  return result;
}

export async function updateBlog(id, blog_data) {
  const requestOptions = {
    method: "PUT",
    body: blog_data,
  };

  const response = await fetch(
    `${BASE_URL}/api/blogs/${id}`,
    requestOptions
  );
  const result = await response.json();
  return result;
}

export async function deleteBlog(id) {
  let requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };
  await fetch(
    `${BASE_URL}/api/blogs/${id}`,
    requestOptions
  );
}
