import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Recipes</h2>
      <div className="grid grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-lg font-bold">{recipe.title}</h3>
            <p className="text-gray-700">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
