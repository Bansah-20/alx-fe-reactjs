// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (index, updatedRecipe) =>
    set((state) => {
      const recipes = [...state.recipes];
      recipes[index] = updatedRecipe;
      return { recipes };
    }),
  deleteRecipe: (index) =>
    set((state) => {
      const recipes = state.recipes.filter((_, i) => i !== index);
      return { recipes };
    }),
  setRecipes: (recipes) => set({ recipes }),
}));
