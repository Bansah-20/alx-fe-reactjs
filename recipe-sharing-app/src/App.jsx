import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 16 }}>
      <header style={{ marginBottom: 18 }}>
        <h1><Link to="/">Recipe Sharing App</Link></h1>
        <nav>
          <Link to="/favorites" style={{ marginRight: 8 }}>Favorites</Link>
          <Link to="/recommendations" style={{ marginRight: 8 }}>Recommendations</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={
          <>
            <SearchBar />
            <AddRecipeForm />
            <RecipeList />
          </>
        } />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </div>
  )
}

export default App
