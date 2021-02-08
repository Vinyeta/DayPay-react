
import "./TradePage.css"
import Button from '../Button/Button';
import { useState } from 'react';
import {ReactComponent as DotPattern} from "../../assets/Pattern.svg"

const TradePage = () => {

  const [email, setEmail] = useState();

  const [amount, setAmount] = useState();

  const body = {
    email: "",
    amount:""
  };

  const handleSubmit = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:3001/api/", options).then((response) =>
      console.log(response.status)
    );

    cleanForm();
  };

  const cleanForm = () => {
    setEmail("");
    setAmount("");
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
            />
                <input className="input__container" placeholder="Amount"
            type="number"
            name="amount"
            onChange={(e) => setAmount(e.target.value)}
            />

            <Button
            style="defaultButton_featured"
            value="Transfer funds" 
            onClick={handleSubmit}/>
                </form>   </div></div>
    )
}

export default TradePage;