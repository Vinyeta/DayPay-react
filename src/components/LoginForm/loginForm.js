import { useState, useContext } from "react";
import { Link  } from "react-router-dom";
import "./loginForm.css";
import Button from "../Button/Button";
import Logo from "../../assets/Logo.png";
import Moreno from "../../assets/Moreno.png";
import betterPayments from "../../assets/betterPayments.png";
import { UserContext } from "../../user-context";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login } = useContext(UserContext);

  const body = {
    email: email,
    password: password,
  };

  return (
    <div className="Login__container">
      <div className="logform__container">
        <Link to="/">
          <img src={Logo} alt="logo" className="logoDayPay" />
        </Link>
        <form className="signUpForm">
          <input
            className="input__container"
            placeholder="Email"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input__container"
            placeholder="Password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            buttonClass="defaultButton_featured"
            value="Login"
            onClick={() => {
              login(body);
            }}
          />
          <span className="alreadyAccount">
            Don`t have an account?
            <Link to="/signup" style={{ textDecoration: "none" }}>
              {" "}
              Sign Up
            </Link>
          </span>
        </form>
      </div>
      <div className="contenedor__imagen">
        <img src={Moreno} alt="Moreno" className="imagen__moreno" />
        <img
          src={betterPayments}
          alt="betterPayments"
          className="imagenBetterPayments"
        />
      </div>
    </div>
  );
};
export default LoginForm;
