function Footer() {
  const footerStyle = {
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "15px",
    marginTop: "20px",
  };

  const textStyle = {
    fontSize: "14px",
    letterSpacing: "1px",
  };

  return (
<footer style={footerStyle}>
  <p style={textStyle}>© 2023 City Lovers</p>
</footer>
);
}

export default Footer;