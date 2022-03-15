export default function Underline({ styleInline }) {
  return (
    <button
      onClick={() => styleInline("UNDERLINE")}
      className="btn text-decoration-underline"
    >
      U
    </button>
  );
}
