import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr style={{ margin: '2rem 0' }} />
      <RecipeList />
    </div>
  );
};

export default App;
