export async function getBlogsData() {
  const result = await fetch("http://localhost:5000/api/blogs");
  const blogs = await result.json();
  return blogs;
}

export async function getBlogData(id) {
  const result = await fetch(`http://localhost:5000/api/blogs/${id}`);
  const blog = await result.json();
  return blog[0];
}

export async function addBlogData(blog_data) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    data: blog_data,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch("http://localhost:5000/api/blogs/new", requestOptions);
  const result = await response.json();
  return result;
}

export async function updateBlogData(id, blog_data) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    data: blog_data,
  });

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(`http://localhost:5000/api/blogs/${id}/update`, requestOptions);
  const result = await response.json();
  return result;
}

export async function deleteBlogData(id) {
  let requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  const response = await fetch(`http://localhost:5000/api/blogs/${id}/delete`, requestOptions)
  console.log(response.text())

}
