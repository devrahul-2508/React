import React from "react";
import Links from "./links/Links";
import { auth } from "@/lib/auth";

async function Navbar() {
  const session = await auth();
  console.log(session);
  return (
    <div className="navContainer h-16 flex flex-row justify-between items-center">
      <div className="Logo text-lg font-bold">Logo</div>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
}

export default Navbar;
