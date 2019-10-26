import React, { useContext } from "react";
import { CountContext } from "./index";
function ComponentD() {
  const [count, dispatch] = useContext(CountContext);
  return (
    <div>
      <button onClick={() => dispatch("decrement")}>-</button>
    </div>
  );
}

export default ComponentD;
