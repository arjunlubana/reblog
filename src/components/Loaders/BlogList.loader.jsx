import { Box, Skeleton } from "@mui/material";

export default function BlogListLoader() {
	return (
		<Box
			sx={{
				maxWidth: 600,
				mx: "auto",
				my: 2,
			}}
		>
			{[1, 2, 3].map((skeleton) => (
				<Box key={skeleton}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							my: 1,
						}}
					>
						<Skeleton variant="circular" width={50} height={50} />
						<Box
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Skeleton variant="text" width="50%" />
							<Skeleton variant="text" width="25%" />
						</Box>
					</Box>
					<Skeleton
						variant="rectangular"
						width="100%"
						height="25vh"
					/>
				</Box>
			))}
		</Box>
	);
}
