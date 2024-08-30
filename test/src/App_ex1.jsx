import React, { useState } from "react";

function App() {
  const [price, setPrice] = useState(10000);

  const handleDiscount = () => {
    setPrice(5000);
  };

  return (
    <div className="app">
      <h1>{price}원</h1> {}
      <button onClick={handleDiscount}>가격할인하기</button> {}
    </div>
  );
}

export default App;
