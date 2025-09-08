import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#333", color: "#fff" }}>
      <h2 style={{ display: "inline" }}>MyCompany</h2>
      <ul style={{ display: "inline", marginLeft: "2rem", listStyle: "none" }}>
        <li style={{ display: "inline", marginRight: "1rem" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        </li>
        <li style={{ display: "inline", marginRight: "1rem" }}>
          <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
        </li>
        <li style={{ display: "inline", marginRight: "1rem" }}>
          <Link to="/services" style={{ color: "#fff", textDecoration: "none" }}>Services</Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
