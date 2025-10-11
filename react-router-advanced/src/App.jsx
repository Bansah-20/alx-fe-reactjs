import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
<Route
  path="/profile/*"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
>
  <Route path="details" element={<ProfileDetails />} />
  <Route path="settings" element={<ProfileSettings />} />
</Route>

        {/* Dynamic Route Example */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
