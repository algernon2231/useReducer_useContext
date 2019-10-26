import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import "./styles.css";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <CountContext.Provider value={[count, dispatch]}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
