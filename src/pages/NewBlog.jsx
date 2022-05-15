import { useQuery } from "react-query";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { BlogEditor, BlogLoader, Redirect } from "components";
import { getRawEditorState } from "utils";
import { reblogApi } from "api";

function NewBlog() {
	const { isLoading, isError, error, data } = useQuery("blog", () =>
		reblogApi.post("/blogs/new", {
			title: getRawEditorState(),
			body: getRawEditorState(),
		})
	);
	console.log(isLoading, isError, error, data);
	if (isLoading) {
		return <BlogLoader />;
	}
	if (isError) {
		return <div>{JSON.stringify(error)}</div>;
	}

	return <BlogEditor data={data.data} />;
}

// export default withAuthenticationRequired(NewBlog, {
// 	onRedirecting: () => <Redirect />,
// });
export default NewBlog;