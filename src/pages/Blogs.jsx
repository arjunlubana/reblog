import { useQuery } from "react-query";
import { BlogsList, EmptyBlogs, Spinner } from "components";
import { getBlogs } from "api";

export default function Blogs() {
   const { isLoading, data } = useQuery("drafts", getBlogs);

  return isLoading ? (
    <Spinner />
  ) : data.length === 0 ? (
    <EmptyBlogs />
  ) : (
    <BlogsList blogs={data} />
  );
}

