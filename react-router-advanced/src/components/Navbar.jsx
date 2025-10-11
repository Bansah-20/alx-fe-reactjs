import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#2563eb", color: "white" }}>
      <Link to="/" style={{ margin: "0 10px", color: "white" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 10px", color: "white" }}>About</Link>
      <Link to="/profile" style={{ margin: "0 10px", color: "white" }}>Profile</Link>
      <Link to="/blog/1" style={{ margin: "0 10px", color: "white" }}>Blog Post</Link>
    </nav>
  );
}
