import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./signUpForm.css";
import Button from "../Button/Button";
import imagen from "../../assets/Moreno.png";
import Logo from "../../assets/Logo.png";
import betterPayments from "../../assets/betterPayments.png";
import EyeOff from '../../assets/eye-off.svg';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const history = useHistory();


  const body = {
    name: firstName,
    surname: lastName,
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

    fetch("http://localhost:5000/api/users", options)
      .then((response) => response.json())
      .then( history.replace('/login'))
      .catch(error => console.log(error))
  };
  return (
  <div className="SignUp__container">
    <div className="form__container">
      <Link to='/' >
        <img src={Logo} alt="logo" className="logoDayPay"/>
      </Link>
      <form className="signUpForm">
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

        <div className="inputPassword"> 
          <input className="input__container" placeholder="Password"
            type={passwordShown ? "text" : "password"}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
            <img className="eyeOffSign" src={EyeOff} alt="eye off" onClick={togglePasswordVisiblity} />
        </div>

        <div className="buttonOfSignUpForm">
          <Button
          style="defaultButton_featured"
          value="Sign up"
          onClick={handleSubmit} />
          </div>
        <span className="alreadyAccount">Already have an account? 
        <Link to="/login" style={{ textDecoration: 'none' }}> Log in</Link>
        </span>
      </form>
    </div>
    <div className="contenedor__imagen">
    <img src={betterPayments} alt="betterPayments" className="imagenBetterPayments" />
    <img src={imagen} alt="imagenSignUp" className="imagen__signUp" />
    </div>

  </div>
  );
};

export default SignUpForm;