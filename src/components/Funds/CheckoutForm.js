import React, { useState, useEffect } from "react";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

import "./CheckoutForm.css"
import {

    addFunds,
  } from '../Wallet/walletHelper';
 import UseAnimations from 'react-useanimations';


export default function CheckoutForm({amount, walletId}) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    
    // Create PaymentIntent as soon as the page loads
    console.log(walletId);
    window
      .fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
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
        card: elements.create('card', {hidePostalCode: true})
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
      console.log(walletId + "mira aqui")
      addFunds(payload.paymentIntent.description, (payload.paymentIntent.amount/100))
    }
  };
  return (
    <div className="checkoutform">
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
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
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
      </p>
    </form>
    </div>
  );
}