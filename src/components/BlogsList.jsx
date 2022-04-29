import { BlogCard } from "components";

export default function BlogsList({ blogs }) {
	return blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />);
}
