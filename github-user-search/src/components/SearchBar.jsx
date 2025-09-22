import { useState } from "react";
import { getUser } from "../services/githubApi";

function SearchBar({ setUser }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (query.trim() === "") return;
    const userData = await getUser(query);
    setUser(userData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub user..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
