import "./IntroducePage.css";
import introducePic from "../../assets/introducepic.png";
import Button from "../Button/Button";

const IntroducePage = () => {
    return (
        <div className="introducePage__principal__conteiner">
            <div>
                <span className="big_text" >Send and receive money without a hassle</span>
                <br/>
                <span className="small__text">We’ve helped thousends of people to save fees <br />sending money with us.</span>
            <Button
                buttonClass="buttonOfIntroducePage"
                value="Get Started for Free"/>
                <span className="stillConfused_text"> Still confused? </span>
                <span className="stillConfused_text_url">Check our 1 min video</span>
            </div>
            <div className="introduceImage__container">
                <img src={introducePic} className="target" alt="introduce pic" />
            </div>
        </div>
        
    );
};

export default IntroducePage;