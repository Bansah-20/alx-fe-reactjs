// src/store/recipeStore.js
import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe].filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
}));

export default useRecipeStore;
