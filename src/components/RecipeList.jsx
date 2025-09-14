import React from 'react'
import useRecipeStore from '../stores/useRecipeStore'
import { Link } from 'react-router-dom'

const RecipeList = () => {
  // use filteredRecipes if a search term exists; otherwise full list
  const searchTerm = useRecipeStore(state => state.searchTerm)
  const recipes = useRecipeStore(state => (searchTerm ? state.filteredRecipes : state.recipes))

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet.</p>
  }

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} style={{ borderBottom: '1px solid #ddd', padding: '8px 0' }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <div>
            <Link to={`/edit/${recipe.id}`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
