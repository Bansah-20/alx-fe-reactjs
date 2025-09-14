import React from 'react'
import useRecipeStore from '../stores/useRecipeStore'

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm)
  const searchTerm = useRecipeStore(state => state.searchTerm)

  return (
    <input
      type="search"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ width: '100%', marginBottom: 12 }}
    />
  )
}

export default SearchBar
