import React, { useState } from "react";

function App() {
  const [array, setArray] = useState([0]);

  function click() {
    let random = Math.floor(Math.random() * 100);
    setArray([...array, random]);
  }

  return (
    <div className="app">
      <h1>{array.join(",")}</h1>
      <button onClick={click}>랜덤숫자넣기</button>
    </div>
  );
}

export default App;
