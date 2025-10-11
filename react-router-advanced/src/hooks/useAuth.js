import { useState } from "react";

export function useAuth() {
  // Simulate authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return { isAuthenticated, setIsAuthenticated };
}
