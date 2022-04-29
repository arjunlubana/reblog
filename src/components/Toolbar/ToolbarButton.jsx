import Button from "@mui/material/Button";

export default function ToolbarButton({ icon, toggleStyle }) {
	return (
		<Button variant="outlined" onClick={() => toggleStyle()} sx={{height: 50}} >
			{icon}
		</Button>
	);
}
