import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Editor, RichUtils, convertToRaw } from "draft-js";
import "./styles.css";

export default function BlogTitle({
	blogTitle,
	setBlogTitle,
	blogUpdate,
	setBlogUpdate,
	readOnly,
}) {
	const location = useLocation();
	const handleChange = (editorState) => {
		setBlogTitle(editorState);
		// Registers title updates to be sent to the server
		let rawEditorState = JSON.stringify(
			convertToRaw(editorState.getCurrentContent())
		);
		if (blogUpdate.has("blogTitle")) {
			blogUpdate.set("blogTitle", rawEditorState);
		} else {
			blogUpdate.append("blogTitle", rawEditorState);
		}
		setBlogUpdate(blogUpdate);
	};

	useEffect(() => {
		// Only toggle Title header style when a new blog is created.
		if (location.pathname === "/blog/new") {
			setBlogTitle(RichUtils.toggleBlockType(blogTitle, "header-one"));
		}
	}, []);
	return (
		<Editor
			editorState={blogTitle}
			onChange={handleChange}
			placeholder={<h1>Blog Title</h1>}
			readOnly={readOnly}
		/>
	);
}
