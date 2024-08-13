import React from "react";

function Navbar() {
  return (
    <div className="w-full bg-blue-800">
      <div className="mx-auto flex justify-between items-center py-3 px-6">
        <span className="text-white text-2xl font-bold">Booking.Com</span>
        <div className="flex space-x-4">
          <button className="bg-blue-800 border border-white text-white py-2 px-5 rounded">
            Register
          </button>
          <button className="navButton bg-white py-2 px-5 rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
