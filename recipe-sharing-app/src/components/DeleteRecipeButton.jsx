import React from 'react';
import { useRecipeStore } from './recipeStore';

function DeleteRecipeButton({ index }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(index)}>Delete</button>
  );
}

export default DeleteRecipeButton;
