const blogs = [
  {
    "id": 1,
    "data": {
      
    },
    "date_created": "12/07/2021",
    "date_modified": "14/08/2021",
    "author": "Arjun Singh Lubana"
  }
]

export function getBlogs() {
  return blogs;
}

export function getBlog(id) {
  return blogs.filter((blog) => blog["id"] === id);
}

export function addBlog(blog_data) {
  let blog = {
    id: 10,
    data: {},
    date_created: "12/07/2021",
    date_modified: "14/08/2021",
    author: "Arjun Singh Lubana",
  }

  blog.data = blog_data;
  blogs.push(blog)
  console.log(blogs)
}

export function updateBlog() {}

export function deleteBlog() {}
