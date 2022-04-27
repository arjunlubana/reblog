import { useQuery } from "react-query";
import { BlogCard, EmptyBlogs, Spinner } from "components";
import { getBlogs } from "api";

export default function Blogs() {
  const { isLoading, data } = useQuery("blogs", getBlogs);

  const BlogList = ((data) => {
    return data.map((blog) => (
      <BlogCard key={blog.id} blog={blog} />
    ))
  });

  return (
    isLoading
      ? <Spinner />
      : <div className="mt-5" id="blogs">
        {data.length === 0 ? <EmptyBlogs /> : BlogList(data)}
      </div>
  );
}
