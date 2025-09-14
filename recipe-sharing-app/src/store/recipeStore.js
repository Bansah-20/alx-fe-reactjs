import { create } from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => 
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  
  // later enhancements
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter(r => r.id !== id) })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map(r =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),
}))
export default useRecipeStore
