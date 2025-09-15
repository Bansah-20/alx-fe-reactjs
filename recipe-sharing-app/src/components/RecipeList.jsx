// src/components/RecipeList.jsx
import React from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>No recipes found. Try adjusting your search.</p>;
  }

  return (
    <ul>
      {filteredRecipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
