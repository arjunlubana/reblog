export default function Italic({ styleInline }) {
  return (
    <button onClick={() => styleInline("ITALIC")} className="btn fst-italic">
      I
    </button>
  );
}
