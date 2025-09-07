function MainContent() {
  const mainStyle = {
    backgroundColor: "#f4f4f4",
    padding: "30px",
    textAlign: "center",
    minHeight: "200px",
  };

  const headingStyle = {
    color: "#333",
    fontSize: "28px",
    marginBottom: "15px",
  };

  const textStyle = {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#555",
  };
return (
<main style={mainStyle}>
  <h2 style={headingStyle}>Wrlcome to  Main Content</h2>
  <p style={textStyle}>I love to visit New York, Paris, and Tokyo.</p>
</main>
);
}

export default MainContent;
