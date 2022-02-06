import { Editor, RichUtils } from "draft-js";
import { Toolbar } from "..";
import { useRef } from "react";

export default function BlogBody({ blogBody, setBlogBody, readOnly }) {
	const handleKeyCommand = (command, blogBody) => {
		const newState = RichUtils.handleKeyCommand(blogBody, command);
		if (newState) {
			setBlogBody(newState);
			return "handled";
		}
		return "not handled";
	};
	const editorRef = useRef(null);

	const focusEditor = () => {
		editorRef.current.focus();
	};
	return (
		<div className="p-4">
			{readOnly ? (
				""
			) : (
				<Toolbar
					blogBody={blogBody}
					setBlogBody={setBlogBody}
					focusEditor={focusEditor}
				/>
			)}

			<Editor
				editorState={blogBody}
				onChange={setBlogBody}
				handleKeyCommand={handleKeyCommand}
				placeholder="Whats on your mind ..."
				ref={editorRef}
				readOnly={readOnly}
			/>
		</div>
	);
}
