import { useState } from "react";
import "./signUpForm.css";
import Button from "../Button/Button";
import imagen from "../../assets/imagelogin.png";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const body = {
    firstName: firstName,
    lastName: lastName,
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
  <div className="SignUp__container">
    <div className="signUpForm">
    <form >
      <input className="input__container" placeholder="First name"
        type="text"
        name="firstName"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input className="input__container" placeholder="Last name"
        type="text"
        name="lastName"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input className="input__container" placeholder="Email"
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="input__container" placeholder="Password"
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
        <Button
        style="buttonOfSignUpForm"
        value="Sign up" />
    </form>
    </div>
    <div className="contenedor__imagen">
    <img src={imagen} alt="imagenSignUp" className="imagen__signUp" />
    </div>
  </div>
  );
};

export default SignUpForm;