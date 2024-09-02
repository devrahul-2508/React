"use client";

import Link from "next/link";
import NavLink from "../navLink/navLink";
import { useState } from "react";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const [open, setOpen] = useState(false);

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div>
      {/* This container is hidden on mobile (below "md") and visible on larger screens */}
      <div className="linkContainer hidden md:flex flex-row items-center space-x-1">
        {links.map((link) => {
          return <NavLink item={link} key={link.title} />;
        })}
        {session ? (
          <>
            {isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }}></NavLink>
            )}
            <button className="bg-white p-1 text-black text-sm font-bold rounded-sm">
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
        )}
      </div>

      {/* This button is visible only on mobile (below "md") */}
      <div className="md:hidden">
        <button className="menuButton" onClick={() => setOpen((prev) => !prev)}>
          Menu
        </button>

        {/* The mobile dropdown menu, shown when "open" is true */}
        {open && (
          <div className="mobileLinks absolute h-full right-0 w-1/2 flex flex-col items-center justify-center gap-2 overflow-hidden bg-purple-700">
            {links.map((link) => {
              return <NavLink item={link} key={link.title} />;
            })}
            {session ? (
              <>
                {isAdmin && (
                  <NavLink item={{ title: "Admin", path: "/admin" }}></NavLink>
                )}
                <button className="bg-white p-1 text-black text-sm font-bold rounded-sm">
                  Logout
                </button>
              </>
            ) : (
              <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Links;
