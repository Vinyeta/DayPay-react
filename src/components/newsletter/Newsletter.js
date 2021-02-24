import { useState } from 'react';
import "./newsletter.css";
import emailLogo from "../../assets/email-logo.png";
import Button from "../Button/Button";
import { validateEmail } from '../../Utils/validations';


const Newsletter = () => {

    const [email, setEmail] = useState('');

    const [errorStyle, setErrorStyle] = useState('errorInvisible');


    const body = {
        email: email
    }

    const handleSubmit = () => {
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          };
        if(!validateEmail(email)) {
            setErrorStyle('errorVisibile');
        } else {
          fetch("http://localhost:5000/api/newsletter", options)
          .then((response) => response.json())
          .catch(error => console.log(error))
        }
    };

    return (
        <div className="newsletter__container" >
            <div className="newsletter__title__container">
                <span>Suscribe to Our Newsletter </span>
            </div>
            <div className="newsletter__text__container">
                <span> Time is the most precious thing you have when Bootstrapping. You can't take time.</span>
            </div>
            <div className="newsletter__bottom__container">
                <img src={emailLogo} alt="email Logo" />
                <input type="text" className="newsletter__email" placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)} /> 
                <Button
                    buttonClass="buttonOfNewsletterform"
                    value="Subscribe"
                    onClick={handleSubmit} />
            </div>
            <span className={errorStyle}>Invalid email</span>
        </div>
    );
};

export default Newsletter;