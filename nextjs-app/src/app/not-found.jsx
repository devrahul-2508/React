import React from "react";
import Link from "next/link";

function NotFound() {
  return <div>
    <h2>Not Found</h2>
    <p>Sorry the page you are looking for doesn't exist</p>
    <Link href="/">Return Home</Link>
  </div>;
}

export default NotFound;
