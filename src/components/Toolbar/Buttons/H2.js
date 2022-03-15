export default function H2({ styleBlock }) {
  return (
    <button onClick={() => styleBlock("header-two")} className="btn">
      H2
    </button>
  );
}
