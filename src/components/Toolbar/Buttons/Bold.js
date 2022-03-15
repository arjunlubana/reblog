export default function Bold({ styleInline }) {
  return (
    <button onClick={() => styleInline("BOLD")} className="btn fw-bold">
      B
    </button>
  );
}
