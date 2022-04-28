import {
	FaQuoteLeft,
	FaFileCode,
	FaCode,
	FaListOl,
	FaList,
} from "react-icons/fa";

const ToolbarButtons = [
	{ styleType: "Block", style: "header-two", icon: "H2" },
	{ styleType: "Block", style: "header-three", icon: "H3" },
	{ styleType: "Block", style: "header-four", icon: "H4" },
	{ styleType: "Block", style: "header-five", icon: "H5" },
	{ styleType: "Inline", style: "BOLD", icon: <strong>B</strong> },
	{ styleType: "Inline", style: "ITALIC", icon: "I" },
	{ styleType: "Inline", style: "CODE", icon: <FaCode /> },
	{ styleType: "Inline", style: "UNDERLINE", icon: "U" },
	{ styleType: "Block", style: "blockquote", icon: <FaQuoteLeft /> },
	{ styleType: "Block", style: "code-block", icon: <FaFileCode /> },
	{ styleType: "Block", style: "ordered-list-item", icon: <FaListOl /> },
	{ styleType: "Block", style: "unordered-list-item", icon: <FaList /> },
];

export default ToolbarButtons;
