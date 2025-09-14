import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

function EditRecipeForm({ index, onDone }) {
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [recipe, setRecipe] = useState(recipes[index] || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe.trim()) {
      updateRecipe(index, recipe);
      onDone();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditRecipeForm;
