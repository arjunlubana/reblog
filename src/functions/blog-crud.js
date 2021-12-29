export async function getBlogsData() {
  const result = await fetch("http://localhost:5000/api/blogs");
  const blogs = await result.json()
  return blogs;
}

export async function getBlogData(id) {
  const result = await fetch(`http://localhost:5000/api/blogs/${id}`);
  const blog = await result.json()
  return blog[0];
}

export function addBlogData(blog_data) {
  // let blog = {
  //   data: {},
  //   author: "Arjun Singh Lubana",
  // };

  // blog.data = blog_data;
  // blogs.push(blog);
  return 1;
}

export function updateBlogData(id, data) {
  // getBlogData(id).data = data;
  return 1;
}

export function deleteBlogData(id) {
  // blogs = blogs.filter((blog) => blog.id !== parseInt(id));
  return 1;
}
