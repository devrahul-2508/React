import React from "react";
import Links from "./links/Links";

function Navbar() {
  return (
    <div className="navContainer h-16 flex flex-row justify-between items-center">
      <div className="Logo text-lg font-bold">Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
}

export default Navbar;
