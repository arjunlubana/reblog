import Avatar from "../components/Avatar";

export default function Profile() {
  return (
    <div className="container-fluid w-75 mx-auto d-flex flex-column justify-content-center align-items-center">
      <Avatar />
      <div className="text-center">
        <h3>Name</h3>
        <h4>Email</h4>
        <h5>Joined on</h5>
      </div>
    </div>
  );
}
