export default function Spinner() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
