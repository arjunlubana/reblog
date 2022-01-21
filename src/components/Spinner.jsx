export default function Spinner() {
  return (
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
