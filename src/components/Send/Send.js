import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Send.css"
import Button from '../Button/Button';
import { ReactComponent as DotPattern } from "../../assets/Pattern.svg";
import { validateEmail } from "../../Utils/validations";


const Send = ({wallet, token}) => {

  const walletId = wallet
  const history = useHistory();



  const [email, setEmail] = useState();

  const [amount, setAmount] = useState();

  const [errorStyle, setErrorStyle] = useState({
    "email": 'errorInvisible',
    "amount": 'errorInvisible'
  });

  const body = {
    sender:  walletId,
    receiver: email,
    amount: amount  

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
        'Authorization': 'Bearer ' + token

      },
      body: JSON.stringify(body),
    };


    if (!validateEmail(email) && (amount <= 0 || !amount)) {
      setErrorStyle({
        'email': 'errorVisible',
        'amount': 'errorVisible',
      })
    } else if (amount <= 0) {
      setErrorStyle({
        'email': 'errorInvisible',
        'amount': 'errorVisible',
      })
    } else if (!validateEmail(email)) {
      setErrorStyle({
        'email': 'errorVisible',
        'amount': 'errorInvisible',
      })
    } else {
      fetch(`http://localhost:5000/api/transactions/`, options).then((response) => {
        console.log(response.status);
        history.replace("/dashboard");
      }
      );
    }

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
          <span className={errorStyle.email}>Invalid email</span>

          <input className="input__container" placeholder="Amount"
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}

          />
          <span className={errorStyle.amount}>Introduce a number greater than 0</span>

          <Button
            buttonClass="defaultButton_featured"
            value="Transfer funds"
            onClick={() => handleSubmit()} />
        </form>
      </div>
    </div>
  )
}

export default Send;