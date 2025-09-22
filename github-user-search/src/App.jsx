import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar setUser={setUser} />
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
