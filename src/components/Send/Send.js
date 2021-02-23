
import "./Send.css"
import Button from '../Button/Button';
import { useState } from 'react';
import { ReactComponent as DotPattern } from "../../assets/Pattern.svg"

const Send = ({wallet, token}) => {

  const walletId = wallet

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

  const handleSubmit = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token

      },
      body: JSON.stringify(body),
    };

    fetch(`http://localhost:5000/api/transactions/`, options).then((response) =>
      console.log(response.status)
    );

    cleanForm();
  };


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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input className="input__container" placeholder="Amount"
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <Button
            style="defaultButton_featured"
            value="Transfer funds"
            onClick={() => handleSubmit()} />
        </form>
      </div>
    </div>
  )
}

export default Send;