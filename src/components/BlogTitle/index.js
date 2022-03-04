import { useEffect } from "react";
import { Editor, RichUtils, convertToRaw } from "draft-js";
import "./styles.css";

export default function BlogTitle({
	blogTitle,
	setBlogTitle,
	blogUpdate,
	setBlogUpdate,
	readOnly,
}) {
	const handleChange = (editorState) => {
		setBlogTitle(editorState);
		// Registers title updates to be sent to the server
		let rawEditorState = JSON.stringify(
			convertToRaw(editorState.getCurrentContent())
		);
		if (blogUpdate.has("title")) {
			blogUpdate.set("title", rawEditorState);
		} else {
			blogUpdate.append("title", rawEditorState);
		}
		setBlogUpdate(blogUpdate);
	};

	useEffect(() => {
		// Only toggle Title header style if the block is unxtyled
		if (blogTitle.getCurrentContent().getFirstBlock().getType() === "unstyled") {
			setBlogTitle(RichUtils.toggleBlockType(blogTitle, "header-one"));
		}
	}, []);
	return (
		<Editor
			editorState={blogTitle}
			onChange={handleChange}
			placeholder={<h1>Blog Title</h1>}
			handleReturn={() => "handled"}
			readOnly={readOnly}
		/>
	);
}
