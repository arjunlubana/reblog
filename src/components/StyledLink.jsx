import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const StyledLink = styled(Link)({
	textDecoration: "none",
	color: "black",
	"&:hover": {
		transition: "all 500ms ease-in-out",
		color: blue[500],
	},
});

export default StyledLink;
