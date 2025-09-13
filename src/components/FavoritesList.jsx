import React from 'react'
import useRecipeStore from '../stores/useRecipeStore'
import { Link } from 'react-router-dom'

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites)
  const recipes = useRecipeStore(state => state.recipes)

  const favRecipes = favorites.map(id => recipes.find(r => r.id === id)).filter(Boolean)

  if (favRecipes.length === 0) return <p>No favorites yet.</p>

  return (
    <div>
      <h2>Favorites</h2>
      {favRecipes.map(r => (
        <div key={r.id}>
          <h3><Link to={`/recipes/${r.id}`}>{r.title}</Link></h3>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FavoritesList
