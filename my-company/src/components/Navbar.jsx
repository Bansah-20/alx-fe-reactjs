import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "1rem",
        backgroundColor: "#333",     // ✅ changed from background to backgroundColor
        color: "#fff",
        display: "flex",             // ✅ added flexbox
        justifyContent: "space-between", // ✅ added justifyContent
        alignItems: "center"
      }}
    >
      <h2 style={{ margin: 0 }}>MyCompany</h2>
      <div>
        <Link to="/" style={{ margin: "0 1rem", color: "#fff" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 1rem", color: "#fff" }}>About</Link>
        <Link to="/services" style={{ margin: "0 1rem", color: "#fff" }}>Services</Link>
        <Link to="/contact" style={{ margin: "0 1rem", color: "#fff" }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
