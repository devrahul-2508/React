import React from "react";
import { useAppSelector } from "./redux/hooks";

function MyComp() {
  const count = useAppSelector((s) => s.counter);
  return (
    <>
      <h1>My Com: {count}</h1>
    </>
  );
}

export default MyComp
