import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Editor, RichUtils } from "draft-js";
import "./styles.css";

export default function BlogTitle({ blogTitle, setBlogTitle, readOnly }) {
	const location = useLocation();

	useEffect(() => {
		// Only toggle Title header style when a new blog is created.
		if (location.pathname === "/blog/new") {
			setBlogTitle(RichUtils.toggleBlockType(blogTitle, "header-one"));
		}
	}, []);
	return (
		<Editor
			editorState={blogTitle}
			onChange={setBlogTitle}
			placeholder={<h1>Blog Title</h1>}
			readOnly={readOnly}
		/>
	);
}
