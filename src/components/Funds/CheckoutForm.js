import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { ReactComponent as Ok } from "../../assets/confirm.svg";
import { ReactComponent as Ko } from "../../assets/close.svg";
import "./CheckoutForm.css";
import Button from "../Button/Button";
import { API_ROOT } from "../../hostSettings";
import { UserContext } from "../../user-context";

export default function CheckoutForm({ amount }) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const { wallet, token } = useContext(UserContext);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch(`${API_ROOT}api/stripe/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ amount: amount, wallet: wallet }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.client_secret);
      });
      // eslint-disable-next-line
  }, [wallet]);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      fetch(`${API_ROOT}api/wallet/${wallet}/stripePayment`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(payload),
      });
    }
  };
  return (
    <>
      {wallet && (
        <div className="checkoutform">
          <form id="payment-form" onSubmit={handleSubmit}>
            {!succeeded && !error && (
              <>
                <CardElement
                  id="card-element"
                  options={cardStyle}
                  onChange={handleChange}
                />
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
              </>
            )}
            {/* Show any error that happens when processing the payment */}
            {error && (
              <div className="error">
                <Ko></Ko>
                <br />
                {error}

                <br />
                <br />
                <Button
                  buttonClass="defaultButton_featured"
                  value="Retry payment"
                  onClick={() => history.go(0)}
                />
              </div>
            )}
            {/* Show a success message upon completion */}
            <p
              className={succeeded ? "result-message" : "result-message hidden"}
            >
              <div className="confirmation">
                <Ok />
                <br />
                Payment succeded!
                <br />
                <br />
                <br />
                <Button
                  buttonClass="defaultButton_featured"
                  value="Go to wallet"
                  onClick={() => history.push("/dashboard/wallet")}
                />
              </div>
            </p>
          </form>
        </div>
      )}
    </>
  );
}
