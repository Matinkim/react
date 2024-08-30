import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  function add() {
    setNum(num + 1);
  }
  function minus() {
    setNum(num - 1);
  }
  return (
    <div className="app">
      <h1>{num}</h1>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App;
