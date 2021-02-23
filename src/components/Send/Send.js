
import "./Send.css"
import Button from '../Button/Button';
import { useState } from 'react';
import { ReactComponent as DotPattern } from "../../assets/Pattern.svg"

const Send = ({wallet}) => {

  const walletId = wallet.wallet

  const [email, setEmail] = useState();

  const [amount, setAmount] = useState();

  const body = {
    sender:  walletId,
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
        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJhYjczZmVkYWJhNjY4MzBiN2ExNDEiLCJpYXQiOjE2MTM1Nzg1OTB9.1jXP9kYnGogDcHjPSNFTgpK0k1r5FR9_kc0EsZUSI30"

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
    <div className="tradePage_container">
      <div className="box">
        <div className="boxShapeTop"><DotPattern></DotPattern></div>
        <div className="boxShapeBottom"><DotPattern></DotPattern></div>

        <span> Send money to another user</span>
        <form className="tradeForm">
          <input className="input__container" placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => {setEmail(e.target.value); console.log(email)}}
            value={email}
          />
          <input className="input__container" placeholder="Amount"
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => {setAmount(e.target.value); console.log(amount)}}
          />

          <Button
            style="defaultButton_featured"
            value="Transfer funds"
            onClick={() => handleSubmit(walletId)} />
        </form>
      </div>
    </div>
  )
}

export default Send;