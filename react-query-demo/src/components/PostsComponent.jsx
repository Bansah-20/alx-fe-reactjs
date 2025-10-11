// src/components/PostsComponent.jsx
import { useQuery } from "react-query";
import { useState } from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default function PostsComponent() {
  const [isRefetching, setIsRefetching] = useState(false);

  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000, // data is fresh for 5 seconds
    cacheTime: 60000, // cache data for 1 minute
    refetchOnWindowFocus: true, // refetch when window is focused
    keepPreviousData: true, // keep previous data while fetching new data
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const handleRefetch = async () => {
    setIsRefetching(true);
    await refetch();
    setIsRefetching(false);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Posts</h1>
      <button
        onClick={handleRefetch}
        disabled={isRefetching || isFetching}
        style={{
          background: "#2563eb",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        {isRefetching || isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
