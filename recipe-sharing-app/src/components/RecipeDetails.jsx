import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

function RecipeDetails() {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes[id];

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h2>Recipe Details</h2>
      <p>{recipe}</p>
    </div>
  );
}

export default RecipeDetails;
