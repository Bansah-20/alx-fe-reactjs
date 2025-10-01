import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
         Recipe Sharing Platform
      </h1>

      <div className="flex justify-end mb-6">
  <Link
    to="/add-recipe"
    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
  >
    + Add New Recipe
  </Link>
</div>


      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition transform duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>

              
              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
