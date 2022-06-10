import Button from "@mui/material/Button";

export default function ToolbarButton({ icon, toggleStyle }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => toggleStyle()}
      sx={{ height: 40, p: 2, borderRadius: 0, display: "flex", outline: "1px solid #ead6db" }}
    >
      {icon}
    </Button>
  );
}
