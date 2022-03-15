import { FaCode } from "react-icons/fa";
export default function Monospace({ styleInline }) {
  return (
    <button onClick={() => styleInline("CODE")} className="btn">
      <FaCode />
    </button>
  );
}
