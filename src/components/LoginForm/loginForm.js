import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./loginForm.css";
import Button from "../Button/Button";
import Logo from "../../assets/Logo.png";
import Moreno from "../../assets/Moreno.png";
import betterPayments from "../../assets/betterPayments.png";
import EyeOff from '../../assets/eye-off.svg';

const LoginForm = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorStyle, setErrorStyle] = useState('errorInvisible');
  const history = useHistory();

  if(localStorage.getItem("token"))  history.push("/dashboard");

  
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const body = {
    email: email,
    password: password,
  };

  const handleLogin = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:5000/api/auth/login", options)

      .then(response => response.json())
      .then(json => {
        localStorage.setItem('token', json.token)
        history.replace('/dashboard')
      })
      .catch(error => {
        console.log(error)
        setErrorStyle('errorVisible');
      })
  };
  return (
    <div className="Login__container">
      <div className="logform__container" >
        <Link to='/'>
          <img src={Logo} alt="logo" className="logoDayPay" />
        </Link>
        <form className="signUpForm" noValidate>

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
            <img className="eyeOffLogin" src={EyeOff} alt="eye off" onClick={togglePasswordVisiblity} />
          </div>

          <Button
            buttonClass="defaultButton_featured"
            value="Login"
            onClick={handleLogin}
          />
          <span className={errorStyle}>Invalid password or email</span>
          <span className="alreadyAccount">Don`t have an account?
          <Link to="/signup" style={{ textDecoration: 'none' }}> Sign Up</Link>
          </span>
        </form>
      </div>
      <div className="contenedor__imagen_login">
        <img src={Moreno} alt="Moreno" className="imagen__moreno" />
        <img src={betterPayments} alt="betterPayments" className="imagenBetterPayments" />
      </div>

    </div>  
  );
};


export default (LoginForm);