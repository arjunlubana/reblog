import { useQuery } from "react-query";
import { BlogsList, Spinner } from "components";
import { getDrafts } from "utils/BlogsCRUD";

export default function Drafts() {
  const { isLoading, data } = useQuery("drafts", getDrafts);

  return isLoading ? <Spinner /> : <BlogsList blogs={data} />;
}
