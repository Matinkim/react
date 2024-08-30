function App() {
  //연습문제 44
  const user = {
    email: "",
    password: "",
    loggedIn: false,
  };

  function dataChange(email, password) {
    user.email = email;
    user.password = password;
    user.loggedIn = true;
    console.log(user);
  }
}

return (
  <div className="app">
    <button onClick={() => dataChange("qwe@naver.com", "qwer")}>호출</button>
    <h1>React Props 연습</h1>
    <div className="card-container"></div>
  </div>
);
