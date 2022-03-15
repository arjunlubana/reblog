import { FaFileCode } from "react-icons/fa";
export default function CodeBlock({ styleBlock }) {
  return (
    <button onClick={() => styleBlock("code-block")} className="btn">
      <FaFileCode />
    </button>
  );
}
