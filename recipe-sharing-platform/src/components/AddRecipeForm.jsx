import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split("\n").filter((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("Please include at least 2 ingredients.");
      return;
    }

   
    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.slice(0, 60) + "...",
      image: "https://via.placeholder.com/300x200",
      ingredients: ingredientList,
      instructions: steps.split("\n").filter((s) => s.trim())
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe submitted successfully! (Check console for details)");

 
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
        Add a New Recipe
      </h2>

      {error && (
        <p className="mb-4 text-red-500 font-medium text-center">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
     
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="Enter recipe title"
          />
        </div>

   
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500"
            rows="4"
            placeholder="e.g. 200g pasta\n2 eggs\n50g cheese"
          ></textarea>
        </div>

    
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preparation Steps (one per line)
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500"
            rows="6"
            placeholder="Step 1: Do this...\nStep 2: Do that..."
          ></textarea>
        </div>

      
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
