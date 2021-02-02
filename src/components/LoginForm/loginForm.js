import { useState } from "react";
<<<<<<< Updated upstream
=======
import "./loginForm.css";
import Button from "../Button/Button";
import Logo from "../../assets/Logo.png";
import Moreno from "../../assets/Moreno.png";
import betterPayments from "../../assets/betterPayments.png";
>>>>>>> Stashed changes



const RegisterForm = () => {
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
<<<<<<< Updated upstream
    <div className="register__container">
    <form className="registerForm">
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

    </form>
    </div>
  );
};

export default RegisterForm;
=======
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
        style="defaultButton"
        value="Login"/>
            </div>
          <span className="alreadyAccount">Don`t have an account? <a href="/login"> Sign up</a></span>
        </form>
      </div>
      <div className="contenedor__imagen">
      <img src={betterPayments} alt="betterPayments" className="imagenBetterPayments" />
      <img src={Moreno} alt="Moreno" className="imagenMoreno" />
            </div>
  
    </div>
    );
  };
  
  export default LoginForm;
>>>>>>> Stashed changes
