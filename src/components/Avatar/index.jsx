let imageStyles = {
  border: "2px solid var(--bs-info)",
  borderRadius: "50%",
};

export default function Avatar({ dimensions }) {
  return (
    <img
      src="./assets/profile.jpg"
      alt="..."
      style={{ width: dimensions, height: dimensions, ...imageStyles }}
    />
  );
}

Avatar.defaultProps = {
  dimensions: "100px",
};
