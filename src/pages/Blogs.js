import { useQuery } from "react-query";
import { BlogsList, Spinner } from "components";
import { getBlogs } from "utils/BlogsCRUD";

export default function Blogs() {
  const {isLoading, data} = useQuery("blogs", getBlogs);

  return isLoading ? <Spinner /> : <BlogsList blogs={data} />;
}
