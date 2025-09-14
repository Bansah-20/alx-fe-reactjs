import React, { useEffect } from 'react'
import useRecipeStore from '../stores/useRecipeStore'
import { Link } from 'react-router-dom'

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations)
  const recommendations = useRecipeStore(state => state.recommendations)

  useEffect(() => {
    generateRecommendations()
  }, [generateRecommendations])

  if (!recommendations || recommendations.length === 0) return <p>No recommendations at the moment.</p>

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.map(r => (
        <div key={r.id}>
          <h3><Link to={`/recipes/${r.id}`}>{r.title}</Link></h3>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  )
}

export default RecommendationsList
