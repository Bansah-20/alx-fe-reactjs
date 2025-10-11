import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Profile</h1>
      <nav>
        <Link to="details" style={{ marginRight: "10px" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}
