import './BoxInfo.css';
import Card from '../../assets/Card.png';
import Talk from '../../assets/Talk.png';
import Target from '../../assets/Target.png';


const BoxInfo = () => {

    return (

<div>
<div className="big_text">
        <span>Grow your<br></br></span>
        <span>business fast.</span>
    </div>
<div className="generalbox" >

     <div>
        <span className="box_infoN"><b>Start accepting online payment</b></span>
    </div>
    <div className="box_info">
        <span>Do not loose deals and start</span>
        <span>accepting payments today.</span>   
    </div>
    
    <div>
        <span className="box_infoN"><b>With instant payments</b></span>
    </div>
    <div className="box_info">
        <span>Regardless of the amount,our</span>
        <span>wires are instant.</span>
</div>

<div>
        <span className="box_infoN"><b>Get paid seemlessly</b></span>
</div>
<div className="box_info">
        <span>focus on your details, not on the</span>
        <span>payment options.</span>
</div>
       <div className="target">
       <img src={Target} className="target" alt="target"/>
       </div>
       <div className="talk">
       <img src={Talk} className="talk" alt="talk"/>
       </div>
       <div className="card">
       <img src={Card} className="card" alt="card"/>
       </div>
</div>
</div>
    );
}

export default BoxInfo;
