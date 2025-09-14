import React from 'react'
import useRecipeStore from '../stores/useRecipeStore'
import { useNavigate } from 'react-router-dom'

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    if (!window.confirm('Delete this recipe?')) return
    deleteRecipe(recipeId)
    navigate('/') // back to list after delete
  }

  return <button onClick={handleDelete} style={{ marginLeft: 8 }}>Delete</button>
}

export default DeleteRecipeButton
