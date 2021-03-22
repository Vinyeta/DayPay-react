import { useState } from "react";
import "./Funds.css";
import Button from "../Button/Button";
import { ReactComponent as DotPattern } from "../../assets/Pattern.svg";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const promise = loadStripe(
  "pk_test_51IRZvdKejS6aCTL76ohIcEuzQHZEGDdzYpXXY9PCpFIRt9pFHSU5YXygGydyD9L2810g3j5gBDhWzboAnruvQXjA0059M22jCx"
);

const Funds = () => {
  const [amount, setAmount] = useState(0);
  const [checkoutReady, setCheckoutReady] = useState(false);

  return (
    <div className="tradePage_container">
      <div className="box">
        <div className="boxShapeTop">
          <DotPattern></DotPattern>
        </div>
        <div className="boxShapeBottom">
          <DotPattern></DotPattern>
        </div>

        <span> Add funds to your wallet</span>
        {!checkoutReady && (
          <>
            <input
              className="input__container"
              placeholder="Amount to add"
              type="number"
              name="amount"
              amount={amount}
              disabled={checkoutReady}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button
              buttonClass="defaultButton_featured"
              value="Transfer funds"
              onClick={() => setCheckoutReady(true)}
            />
          </>
        )}
        <Elements stripe={promise}>
          {checkoutReady && (
            <div className="transTitle">
              {" "}
              Complete the payment to add {amount}€ to your wallet
            </div>
          )}

          {checkoutReady && <CheckoutForm amount={amount} />}
        </Elements>
      </div>
    </div>
  );
};

export default Funds;
