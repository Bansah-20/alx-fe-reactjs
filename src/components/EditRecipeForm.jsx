import React, { useState, useEffect } from 'react'
import useRecipeStore from '../stores/useRecipeStore'
import { useParams, useNavigate } from 'react-router-dom'

const EditRecipeForm = () => {
  const { id } = useParams()
  const recipeId = Number(id)
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId))
  const updateRecipe = useRecipeStore(state => state.updateRecipe)
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title)
      setDescription(recipe.description)
    }
  }, [recipe])

  if (!recipe) return <p>Recipe not found.</p>

  const handleSubmit = (e) => {
    e.preventDefault()
    updateRecipe({ id: recipeId, title: title.trim(), description: description.trim() })
    navigate(`/recipes/${recipeId}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  )
}

export default EditRecipeForm
