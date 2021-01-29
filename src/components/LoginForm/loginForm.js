import { useState } from "react";



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