import React, { useContext } from "react";
import { CountContext } from "./index";
function ComponentF() {
  const [count, dispatch] = useContext(CountContext);
  return (
    <div>
      Count : {count}
      <button onClick={() => dispatch("increment")}>+</button>
    </div>
  );
}

export default ComponentF;
