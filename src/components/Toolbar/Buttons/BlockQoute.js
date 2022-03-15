import { FaQuoteLeft } from "react-icons/fa";

export default function BlockQoute({ styleBlock }) {
  return (
    <button onClick={() => styleBlock("blockqoute")} className="btn">
      <FaQuoteLeft />
    </button>
  );
}
