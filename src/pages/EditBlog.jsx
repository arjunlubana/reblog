import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { BlogEditor, BlogLoader, Redirect } from "components";
import { reblogApi } from "api";

function EditBlog() {
  const params = useParams();
  const { isLoading, isError, error, data } = useQuery("blog", () =>
    reblogApi.get(`/blogs/${params.blogId}`)
  );

  if (isLoading) {
    return <BlogLoader />;
  }
  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return <BlogEditor data={data.data} />;
}
// export default withAuthenticationRequired(EditBlog, {
//   onRedirecting: () => <Redirect />,
// });


export default EditBlog;