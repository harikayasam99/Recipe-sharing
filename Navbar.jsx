import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [user, setUser] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">🍽 Recipe Sharing</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        {user ? (
          <>
            <Link to="/add-recipe" className="hover:text-gray-300">Add Recipe</Link>
            <button onClick={handleLogout} className="hover:text-red-400">Logout</button>
          </>
        ) : (
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
