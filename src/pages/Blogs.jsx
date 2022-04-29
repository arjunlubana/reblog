import { useQuery } from "react-query";
import { BlogsList, EmptyBlogs } from "components";
import { getBlogs } from "api";

export default function Blogs() {
   const { isLoading, data } = useQuery("drafts", getBlogs);

  return isLoading ? (
    <div>...Loading</div>
  ) : data.length === 0 ? (
    <EmptyBlogs />
  ) : (
    <BlogsList blogs={data} />
  );
}

