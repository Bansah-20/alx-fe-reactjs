import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-20 text-gray-600">Loading recipe...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          {recipe.title}
        </h1>

       
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {recipe.ingredients
              ? recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)
              : <li>Ingredients list coming soon...</li>}
          </ul>
        </div>


        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            {recipe.instructions
              ? recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)
              : <li>Instructions coming soon...</li>}
          </ol>
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
