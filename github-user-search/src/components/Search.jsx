import { useState } from "react";
import { advancedSearchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await advancedSearchUsers(username, location, minRepos);
      if (results && results.length > 0) {
        setUsers(results);
      } else {
        setError("Looks like we cant find the user");
      }
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="text"
          placeholder="Location (e.g. London)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h2 className="text-lg font-semibold text-center mt-2">
                {user.login}
              </h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 text-center mt-2"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
