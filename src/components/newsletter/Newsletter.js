import { useState } from "react";
import "./newsletter.css";
import emailLogo from "../../assets/email-logo.png";
import Button from "../Button/Button";
import { API_ROOT } from "../../hostSettings";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const body = {
      email: email,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(`${API_ROOT}api/newsletter/`, options);
  };
  return (
    <div className="newsletter__container">
      <div className="newsletter__title__container">
        <span>Suscribe to Our Newsletter </span>
      </div>
      <div className="newsletter__text__container">
        <span>
          {" "}
          Time is the most precious thing you have when Bootstrapping. You can't
          take time.
        </span>
      </div>
      <div className="newsletter__bottom__container">
        <img src={emailLogo} alt="email Logo" />
        <input
          type="text"
          className="newsletter__email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          buttonClass="buttonOfNewsletterform"
          value="Subscribe"
          onClick={() => handleSubmit()}
        />
      </div>
    </div>
  );
};

export default Newsletter;
