import ImageIcon from "assets/image.svg";

export default function ViewCover({ image }) {
	return (
		<div
			className="d-flex align-items-center justify-content-center rounded-3"
			style={{ minHeight: "250px", backgroundColor: "#f1f0ef" }}
		>
			<img
				src={image ? image : ImageIcon}
				alt="cover"
				className="img-fluid"
			/>
		</div>
	);
}
