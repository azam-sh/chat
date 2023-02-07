import { useState } from "react";

const LoginPageComponent = () => {
  const [userName, setUserName] = useState<string>("");

  const saveUser = () => {
    if (userName.trim() === "azam" || userName === "Azam") {
      localStorage.setItem(
        "userName",
        JSON.stringify({
          id: 100,
          name: userName,
          img: "./min.jpg",
        })
      );
      window.location.reload();
    } else if (userName === "") {
      alert("Please enter login");
    } else {
      localStorage.setItem(
        "userName",
        JSON.stringify({
          id: 101,
          name: userName,
          img: "./leo.jpg",
        })
      );
      window.location.reload();
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <span className="login-title">Enter your name</span>
        <input
          className="login-input"
          onChange={(e) => setUserName(e.target.value.trim())}
          type="text"
        />
        <button className="login-btn" onClick={saveUser}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LoginPageComponent;
