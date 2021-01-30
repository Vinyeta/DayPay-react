import { useState } from "react";
import Button from "../Button/Button";
import "../LoginForm/loginForm.css";



const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const body = {
    email: email,
    password: password,
  };

  const handleSubmit = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:5000/api/users", options).then((response) =>
      response.json()
    );
  };
  return (
    <div className="login__container">
    <form className="loginForm">
      <input className="label__text" placeholder="Email"
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="label__text" placeholder="Password"
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        style="defaultButton"
        value="Login"/>
    </form>
    <span>Don't have an account yet? <a>Sign up</a></span>
    </div>
  );
};

export default LoginForm;