import { FaList } from "react-icons/fa";
export default function UList({ styleBlock }) {
  return (
    <button onClick={() => styleBlock("unordered-list-item")} className="btn">
      <FaList />
    </button>
  );
}
