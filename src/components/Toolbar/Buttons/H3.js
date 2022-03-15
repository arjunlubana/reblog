export default function H3({ styleBlock }) {
  return (
    <button onClick={() => styleBlock("header-three")} className="btn">
      H3
    </button>
  );
}
