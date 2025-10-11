import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Post #{id}</h1>
      <p>
        This is a dynamically loaded blog post page. The ID (<strong>{id}</strong>) 
        comes directly from the URL parameter.
      </p>
    </div>
  );
}
