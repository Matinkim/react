import React, { useState } from "react";

function App() {
  const [money, setMoney] = useState("10000");

  function discount() {
    setMoney("5000원");
  }
  return (
    <div className="app">
      <h1>{money}</h1>
      <button onClick={discount}>가격할인하기</button>
    </div>
  );
}

export default App;
