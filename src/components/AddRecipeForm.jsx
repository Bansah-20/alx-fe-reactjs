import React, { useState } from 'react'
import useRecipeStore from '../stores/useRecipeStore'
import { useNavigate } from 'react-router-dom'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    addRecipe({ title: title.trim(), description: description.trim() })
    setTitle('')
    setDescription('')
    // optional: navigate to home (keeps UX clear)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm
