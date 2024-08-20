import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);
  console.log(user.username, "Username");

  return (
    <div className="w-full bg-blue-800">
      <div className="mx-auto flex justify-between items-center py-3 px-6">
        <Link to={"/"}>
          <span className="text-white text-2xl font-bold">Booking.Com</span>
        </Link>
        {user ? (
          <span className="text-white font-bold">{user.username}</span>
        ) : (
          <div className="flex space-x-4">
            <button className="bg-blue-800 border border-white text-white py-2 px-5 rounded">
              Register
            </button>
            <button className="navButton bg-white py-2 px-5 rounded">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
