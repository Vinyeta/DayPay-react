import { useState } from "react";
import "./loginForm.css";
import Button from "../Button/Button";
import Logo from "../../assets/Logo.png";
import Moreno from "../../assets/Moreno.png";
import betterPayments from "../../assets/betterPayments.png";



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
    <div className="Login__container">
      <div className="form__container">
        <img src={Logo} alt="logo" className="logoDayPay"/>
        <form className="signUpForm">
          
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
          <div className="buttonOflogin">
          <Button
        style="defaultButton_featured"
        value="Login"/>
            </div>
          <span className="alreadyAccount">Don`t have an account? <a href="/signUp"> Sign up</a></span>
        </form>
      </div>
      <div className="contenedor__imagen">
      <img src={Moreno} alt="Moreno" className="imagen__moreno" />
      <img src={betterPayments} alt="betterPayments" className="imagenBetterPayments" />
                  </div>
  
    </div>
    );
  };
  
  export default LoginForm;
