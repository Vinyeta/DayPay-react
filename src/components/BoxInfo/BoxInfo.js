import "./BoxInfo.css";
import Card from "../../assets/Card.png";
import Talk from "../../assets/Talk.png";
import Target from "../../assets/Target.png";

const BoxInfo = () => {
  return (
    <div className="boxinfo__container">
      <div className="big_text">
        <span>
          Grow your<br></br>
        </span>
        <span>business fast.</span>
      </div>
      <div className="generalbox">
        <div className="firstsubgeneralbox__container">
          <div>
            <img src={Target} className="target" alt="target" />
          </div>
          <div className="box_info">
            <span className="box_infoN">
              <b>Start accepting online payments</b>
            </span>
            <span>Do not loose deals and start</span>
            <span>accepting payments today.</span>
          </div>
        </div>
        <div className="firstsubgeneralbox__container">
          <div>
            <img src={Talk} className="talk" alt="talk" />
          </div>
          <div className="box_info">
            <span className="box_infoN">
              <b>With instant payments</b>
            </span>
            <span>Regardless of the amount,our</span>
            <span>wires are instant.</span>
          </div>
        </div>
        <div className="firstsubgeneralbox__container">
          <div>
            <img src={Card} className="card" alt="card" />
          </div>
          <div className="box_info">
            <span className="box_infoN">
              <b>Get paid seemlessly</b>
            </span>
            <span>focus on your details, not on the</span>
            <span>payment options.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxInfo;
