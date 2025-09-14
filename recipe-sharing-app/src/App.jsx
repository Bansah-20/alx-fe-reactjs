// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import EditRecipeForm from "./components/EditRecipeForm";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <Routes>
          {/* List of all recipes */}
          <Route path="/" element={<RecipeList />} />

          {/* Add a new recipe */}
          <Route path="/add" element={<AddRecipeForm />} />

          {/* Recipe details by id */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />

          {/* Edit recipe by id */}
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
