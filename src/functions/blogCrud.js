var blogs = [];

export function getBlogsData() {
  return blogs;
}

export function getBlogData(id) {
  const blog = blogs.filter((blog) => blog.id === parseInt(id));
  return blog[0];
}

export function addBlogData(blog_data) {
  let blog = {
    id: 10,
    data: {},
    date_created: "12/07/2021",
    date_modified: "14/08/2021",
    author: "Arjun Singh Lubana",
  };

  blog.data = blog_data;
  blogs.push(blog);
}

export function updateBlogData(id, data) {
  getBlogData(id).data = data;
}

export function deleteBlogData(id) {
  blogs = blogs.filter((blog) => blog.id !== parseInt(id));
}
