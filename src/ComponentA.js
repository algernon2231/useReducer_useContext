import React, { useContext } from "react";
import { CountContext } from "./index";
function ComponentA() {
  const [count, dispatch] = useContext(CountContext);
  return (
    <div>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentA;
