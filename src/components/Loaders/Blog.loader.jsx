import { Box, Skeleton } from "@mui/material";

export default function BlogLoader() {
	return (
		<Box
			sx={{
				maxWidth: 600,
				mx: "auto",
				my: 2,
			}}
		>
			<Skeleton variant="rectangular" width="100%" height="40vh" />{" "}
			<Skeleton variant="text" width="50%" height={50} sx={{mx: "auto"}} />
			<Skeleton variant="text" width="100%" />
			<Skeleton variant="text" width="80%" />
			<Skeleton variant="text" width="60%" />
			<Skeleton variant="text" width="100%" />
			<Skeleton variant="text" width="70%" />
			<Skeleton variant="text" width="100%" />
		</Box>
	);
}
