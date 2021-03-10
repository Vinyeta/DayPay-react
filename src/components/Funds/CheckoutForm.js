import React, { useState, useEffect } from "react";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { ReactComponent as Ok } from "../../assets/confirm.svg";
import { ReactComponent as Ko } from "../../assets/close.svg";
import "./CheckoutForm.css"
import Button from "../Button/Button";
import { useHistory } from 'react-router-dom';


export default function CheckoutForm({amount, walletId, token}) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  useEffect(() => {
    
    // Create PaymentIntent as soon as the page loads
    console.log(walletId);
    window
      .fetch("http://localhost:5000/api/stripe/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify({amount:amount, walletId: walletId})
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
          console.log(data)
        setClientSecret(data.client_secret);
      });
  }, []);



  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  
  
  const handleSubmit = async ev => {


    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });
    console.log(payload)
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
        console.log(payload)
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      fetch(`http://localhost:5000/api/wallet/${walletId}/stripePayment`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify({amount:amount})
      })
    }
  };
  return (
    <div className="checkoutform">
    <form id="payment-form" onSubmit={handleSubmit}>
      {(!succeeded && !error) && (<><CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Add funds"
          )}
        </span>
      </button></>)}
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="error">
          <Ko></Ko>
          <br/>{error}

          <br/><br/>
          <Button buttonClass="defaultButton_featured"
            value="Retry payment"
            onClick={() => history.go(0)} />

        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        <div className="confirmation"><Ok/>
        <br/>Payment succeded!

        <br/>
        <br/>
        <br/>


        <Button buttonClass="defaultButton_featured"
            value="Go to wallet"
            onClick={() => history.push("/dashboard/wallet")} />
        
        </div>
      </p>
    </form>
    </div>
  );
}