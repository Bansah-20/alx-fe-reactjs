import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required.";
    if (!ingredients) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients
        .split("\n")
        .filter((item) => item.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please include at least 2 ingredients.";
      }
    }
    if (!steps) newErrors.steps = "Preparation steps are required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.slice(0, 60) + "...",
      image: "https://via.placeholder.com/300x200",
      ingredients: ingredients.split("\n").filter((item) => item.trim()),
      instructions: steps.split("\n").filter((s) => s.trim())
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe submitted successfully! (Check console for details)");

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
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
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
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
            {errors.ingredients && (
              <p className="text-red-500 text-sm">{errors.ingredients}</p>
            )}
          </div>
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
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

      
        <button
          type="submit"
          className="w-full md:w-auto bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
