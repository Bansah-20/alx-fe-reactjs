import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function PostsComponent() {
  const [isRefetching, setIsRefetching] = useState(false);

 
  const fetchPosts = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;
  };

 
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000, 
  });

 
  if (isLoading) return <p className="text-center">Loading posts...</p>;
  if (isError) return <p className="text-red-500 text-center">Error: {error.message}</p>;

  const handleRefetch = async () => {
    setIsRefetching(true);
    await refetch();
    setIsRefetching(false);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Posts</h2>
        <button
          onClick={handleRefetch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
        >
          {isRefetching || isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
      </div>

      <ul className="space-y-4 max-h-[400px] overflow-y-auto">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white border border-gray-300 p-4 rounded hover:shadow transition"
          >
            <h3 className="font-semibold text-lg text-blue-700">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
