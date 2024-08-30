import React, { useState } from "react";

function App() {
  // 초기값으로 배열을 설정합니다. 배열의 첫 번째 값은 0입니다.
  const [numbers, setNumbers] = useState([0]);

  // 버튼 클릭 시 호출되는 함수입니다.
  const handleAddRandomNumber = () => {
    // 1부터 100 사이의 랜덤한 숫자를 생성합니다.
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // 기존 배열의 복사본을 만들고 랜덤 숫자를 추가합니다.
    setNumbers([...numbers, randomNumber]);
  };

  return (
    <div className="app">
      {/* 배열의 모든 숫자를 화면에 출력합니다. */}
      <h1>{numbers.join(", ")}</h1>
      {/* 버튼 클릭 시 handleAddRandomNumber 함수가 호출됩니다. */}
      <button onClick={handleAddRandomNumber}>랜덤숫자넣기</button>
    </div>
  );
}

export default App;
