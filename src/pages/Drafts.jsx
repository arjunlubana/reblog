import { useQuery } from "react-query";
import { EmptyBlogs, BlogsList } from "components";
import { getDrafts } from "api";

export default function Drafts() {
  const { isLoading, data } = useQuery("drafts", getDrafts);

  return isLoading ? (
    <div>...Loading</div>
  ) : data.length === 0 ? (
    <EmptyBlogs />
  ) : (
    <BlogsList blogs={data} />
  );
}
