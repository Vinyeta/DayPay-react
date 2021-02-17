
import "./AccountSettings.css"
import Button from '../Button/Button';
import { useState } from 'react';
import { ReactComponent as DotPattern } from "../../assets/Pattern.svg"
import Logo from "../../assets/Logo.png"

const AccountSettings = () => {

  const WALLET_ID = "6021ff060e5bd82c2fccd226"

  const [email, setEmail] = useState();

  const [amount, setAmount] = useState();

  const body = {
    sender:  WALLET_ID,
    receiver: email,
    amount: amount*100 
  };

  const cleanForm = () => {
    setEmail("");
    setAmount("");
  };

  const handleSubmit = (id) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(`http://localhost:5000/api/transactions/${id}`, options).then((response) =>
      console.log(response.status)
    );

    cleanForm();
  };

  console.log(email);
  console.log(amount);

  return (
    <div className="accountSettings_container">
      <div className="boxSettings">
        <div className="boxShapeTop"><DotPattern></DotPattern></div>
        <div className="boxShapeBottom"><DotPattern></DotPattern></div>

        <span> Edit profile</span>
        <form className="tradeForm">

          <img className="accountSettins__img">{Logo}</img>

          <div className="nameData__container">
            <input className="nameInput__container" placeholder="Name"
              type="text"
              name="Name"
              onChange={(e) => {setEmail(e.target.value); console.log(email)}}
            />

            <input className="lastNameInput__container" placeholder="Last Name"
              type="text"
              name="lastName"
              onChange={(e) => {setEmail(e.target.value); console.log(email)}}
            />     
          </div>



            <input className="input__container" placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => {setEmail(e.target.value); console.log(email)}}
          /> 

            <input className="input__container" placeholder="Password"
            type="text"
            name="password"
            onChange={(e) => {setEmail(e.target.value); console.log(email)}}
          /> 

          <Button
            style="defaultButton_featured"
            value="SAve"
            onClick={() => handleSubmit(WALLET_ID)} />
        </form>
      </div>
    </div>
  )
}

export default AccountSettings;