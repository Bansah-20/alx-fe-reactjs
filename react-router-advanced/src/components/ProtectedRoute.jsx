import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = false; // simulate login status

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
