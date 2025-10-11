import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Blog Post #{id}</h1>
      <p>This page displays details for blog post with ID: {id}.</p>
    </div>
  );
}
