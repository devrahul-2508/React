"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ item }) {
  const pathName = usePathname();

  const isActive = pathName === item.path;

  return (
    <Link
      href={item.path}
      key={item.title}
      className={`${
        isActive
          ? "bg-white text-black" // Active link styles
          : "bg-transparent text-white" // Inactive link styles
      } p-2 rounded text-sm font-bold`}
    >
      {item.title}
    </Link>
  );
}

export default NavLink;
