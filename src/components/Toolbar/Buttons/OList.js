import { FaListOl } from "react-icons/fa";
export default function OList({ styleBlock }) {
  return (
    <button onClick={() => styleBlock("ordered-list-item")} className="btn">
      <FaListOl />
    </button>
  );
}
