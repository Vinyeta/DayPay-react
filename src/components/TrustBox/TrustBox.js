import heart from "../../assets/Heart.svg";
import star from "../../assets/Star.svg";
import facebook from "../../assets/logo-facebook.png";
import microsoft from "../../assets/logo-microsoft.png";
import slack from "../../assets/logo-slack.png";
import "./TrustBox.css";

const TrustBox = () => {
  let transfers = 100000;
  const ratingsNum = 1938;
  const rating = 4.7;

  if (transfers > 1000000) transfers = `${transfers / 1000000}M`;
  else if (transfers > 1000) transfers = `${transfers / 1000}k`;

  return (
    <div id="TrustBox__container">
      <div className="TrustBoxShowRatings__container">
        <span className="TrustBoxBigNum">{transfers}</span>
        <div>
          <img src={heart} alt="heart" />
          <img src={heart} alt="heart" />
          <img src={heart} alt="heart" />
          <img src={heart} alt="heart" />
          <img src={heart} alt="heart" />
        </div>
        <span className="TrustBoxSpan">Transfers made</span>
      </div>
      <div className="TrustBoxShowRatings__container">
        <span className="TrustBoxBigNum">{rating}</span>
        <div>
          <img src={star} alt="heart" />
          <img src={star} alt="heart" />
          <img src={star} alt="heart" />
          <img src={star} alt="heart" />
          <img src={star} alt="heart" />
        </div>
        <span className="TrustBoxSpan">{ratingsNum} Rating</span>
      </div>
      <div id="TrustBoxRightSide__container">
        <span id="TrustBoxBigText">
          Trusted by 5000+ happy bussinesss and customers since 2020.
        </span>
        <span id="TrustBoxFeatureSpan">Also featured in</span>
        <div>
          <img className="logo" src={slack} alt="slack logo" />
          <img className="logo" src={microsoft} alt="microsoft logo" />
          <img className="logo" src={facebook} alt="slack logo" />
        </div>
      </div>
    </div>
  );
};

export default TrustBox;
