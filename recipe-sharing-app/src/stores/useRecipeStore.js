import create from 'zustand'

const useRecipeStore = create((set, get) => ({
  // initial sample recipes (checker-friendly)
  recipes: [
    { id: 1, title: 'Spaghetti Bolognese', description: 'Rich meat sauce over pasta.' },
    { id: 2, title: 'Pancakes', description: 'Fluffy pancakes with syrup.' }
  ],

  // search / filter / favorites / recommendations
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Actions
  addRecipe: (newRecipe) => {
    const recipe = { id: Date.now(), ...newRecipe }
    const recipes = [...get().recipes, recipe]
    set({
      recipes,
      filteredRecipes: recipes.filter(r => r.title.toLowerCase().includes(get().searchTerm.toLowerCase()))
    })
  },

  updateRecipe: (updatedRecipe) => {
    const recipes = get().recipes.map(r => (r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r))
    set({
      recipes,
      filteredRecipes: recipes.filter(r => r.title.toLowerCase().includes(get().searchTerm.toLowerCase()))
    })
  },

  deleteRecipe: (id) => {
    const recipes = get().recipes.filter(r => r.id !== id)
    set({
      recipes,
      filteredRecipes: recipes.filter(r => r.title.toLowerCase().includes(get().searchTerm.toLowerCase())),
      favorites: get().favorites.filter(fid => fid !== id)
    })
  },

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  setSearchTerm: (term) => {
    const search = term.toLowerCase()
    set({
      searchTerm: term,
      filteredRecipes: get().recipes.filter(r => r.title.toLowerCase().includes(search))
    })
  },

  filterRecipes: () => set({
    filteredRecipes: get().recipes.filter(r => r.title.toLowerCase().includes(get().searchTerm.toLowerCase()))
  }),

  addFavorite: (id) => set((state) => ({
    favorites: state.favorites.includes(id) ? state.favorites : [...state.favorites, id]
  })),

  removeFavorite: (id) => set((state) => ({
    favorites: state.favorites.filter(fid => fid !== id)
  })),

  generateRecommendations: () => {
    // simple deterministic recommendation: top non-favorites
    const recs = get().recipes.filter(r => !get().favorites.includes(r.id)).slice(0, 5)
    set({ recommendations: recs })
  }
}))

export default useRecipeStore
