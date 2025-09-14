import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import useRecipeStore from '../stores/useRecipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipeId = Number(id)
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId))
  const addFavorite = useRecipeStore(state => state.addFavorite)
  const removeFavorite = useRecipeStore(state => state.removeFavorite)
  const favorites = useRecipeStore(state => state.favorites)
  const navigate = useNavigate()

  if (!recipe) return <p>Recipe not found.</p>

  const isFav = favorites.includes(recipeId)

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div>
        {isFav ? (
          <button onClick={() => removeFavorite(recipeId)}>Remove Favorite</button>
        ) : (
          <button onClick={() => addFavorite(recipeId)}>Add to Favorites</button>
        )}
        <Link to={`/edit/${recipe.id}`} style={{ marginLeft: 8 }}>Edit</Link>
        <DeleteRecipeButton recipeId={recipeId} />
      </div>
    </div>
  )
}

export default RecipeDetails
