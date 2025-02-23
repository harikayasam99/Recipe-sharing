import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/recipes", { title, description }, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(() => navigate("/"))
    .catch((err) => alert("Error adding recipe"));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" placeholder="Title" required
          value={title} onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea 
          placeholder="Description" required
          value={description} onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;
