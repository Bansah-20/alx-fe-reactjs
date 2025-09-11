import useRecipeStore from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="p-3 border-b">
          <h3 className="font-bold">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
