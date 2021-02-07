
import "./TransactionsPage.css"
import Button from '../Button/Button';
import { useState } from 'react';
import {ReactComponent as DotPattern} from "../../assets/Pattern.svg"
import { ReactComponent as Arrows} from "../../assets/Arrows.svg";
import { ReactComponent as PositiveBalance} from "../../assets/PositiveBalance.svg";



const TransactionsPage = () => {

  const [email, setEmail] = useState();
  const [amount, setAmount] = useState();

    return (
        <div className="transactionsPage_container">
        <div className="transPage">
            <div className="upper" ><div className="miniBox1">
              <div className="percentage"><PositiveBalance></PositiveBalance> 24%</div>
              <div className="balance">269.89$</div>
              <div className="balanceTitle">Balance</div>
            </div>
            <div className="miniBox2"><Button style="defaultButton_featured" value="Add funds"></Button></div>
            </div>
            <div className="Box3">

              <div className="transTitle"><div><span>Recent transactions</span></div><div className="filters"><div></div><div><span>All</span></div><div><span>Income</span></div><div><span>Outcome</span></div></div> </div>
              
              <table className="txTable" >
        
  <tr>
    <td style={{width:"3%", "text-align": "left"}}><Arrows></Arrows></td>
    <td style={{width:"20%"}}>24/04/2020</td>
    <td style={{width:"50%" , "text-align": "left"}}>Joe Doe</td>
    <td style={{width:"65px", height: "16px"}} ><div style={{"background-color":"rgba(32, 233, 188, 0.15)", "border-radius":"2px",  "padding-left":"6px", "padding-right":"6px", "font-size":"9px"}} >OUTCOME</div></td>
    <td style={{width:"20%", textAlign:"right"}}>-12,35 USD</td>
  </tr>
  <tr>
    <td style={{width:"3%", "text-align": "left"}}><Arrows></Arrows></td>
    <td style={{width:"20%"}}>24/04/2020</td>
    <td style={{width:"50%" , "text-align": "left"}}>Joe Doe</td>
    <td style={{width:"65px", height: "16px"}} ><div style={{"background-color":"red", "border-radius":"2px",  "padding-left":"6px", "padding-right":"6px", "font-size":"9px"}} >OUTCOME</div></td>
    <td style={{width:"20%", textAlign:"right"}}>-12,35 USD</td>
  </tr>
  <tr>
    <td style={{width:"3%", "text-align": "left"}}><Arrows></Arrows></td>
    <td style={{width:"20%"}}>24/04/2020</td>
    <td style={{width:"50%" , "text-align": "left"}}>Joe Doe</td>
    <td style={{width:"65px", height: "16px"}} ><div style={{"background-color":"red", "border-radius":"2px",  "padding-left":"6px", "padding-right":"6px", "font-size":"9px"}} >OUTCOME</div></td>
    <td style={{width:"20%", textAlign:"right"}}>-12,35 USD</td>
  </tr>
  <tr>
    <td style={{width:"3%", "text-align": "left"}}><Arrows></Arrows></td>
    <td style={{width:"20%"}}>24/04/2020</td>
    <td style={{width:"50%" , "text-align": "left"}}>Joe Doe</td>
    <td style={{width:"65px", height: "16px"}} ><div style={{"background-color":"red", "border-radius":"2px",  "padding-left":"6px", "padding-right":"6px", "font-size":"9px"}} >OUTCOME</div></td>
    <td style={{width:"20%", textAlign:"right"}}>-12,35 USD</td>
  </tr>
  <tr>
    <td style={{width:"3%", "text-align": "left"}}><Arrows></Arrows></td>
    <td style={{width:"20%"}}>24/04/2020</td>
    <td style={{width:"50%" , "text-align": "left"}}>Joe Doe</td>
    <td style={{width:"65px", height: "16px"}} ><div style={{"background-color":"red", "border-radius":"2px",  "padding-left":"6px", "padding-right":"6px", "font-size":"9px"}} >OUTCOME</div></td>
    <td style={{width:"20%", textAlign:"right"}}>-12,35 USD</td>
  </tr>
  <tr>
    <td style={{width:"3%", "text-align": "left"}}><Arrows></Arrows></td>
    <td style={{width:"20%"}}>24/04/2020</td>
    <td style={{width:"50%" , "text-align": "left"}}>Joe Doe</td>
    <td style={{width:"65px", height: "16px"}} ><div style={{"background-color":"red", "border-radius":"2px",  "padding-left":"6px", "padding-right":"6px", "font-size":"9px"}} >OUTCOME</div></td>
    <td style={{width:"20%", textAlign:"right"}}>-12,35 USD</td>
  </tr>
  <tr>
    <td style={{width:"3%", "text-align": "left"}}><Arrows></Arrows></td>
    <td style={{width:"20%"}}>24/04/2020</td>
    <td style={{width:"50%" , "text-align": "left"}}>Joe Doe</td>
    <td style={{width:"65px", height: "16px"}} ><div style={{"background-color":"red", "border-radius":"2px",  "padding-left":"6px", "padding-right":"6px", "font-size":"9px"}} >OUTCOME</div></td>
    <td style={{width:"20%", textAlign:"right"}}>-12,35 USD</td>
  </tr>
  <tr>
    <td style={{width:"3%", "text-align": "left"}}><Arrows></Arrows></td>
    <td style={{width:"20%"}}>24/04/2020</td>
    <td style={{width:"50%" , "text-align": "left"}}>Joe Doe</td>
    <td style={{width:"65px", height: "16px"}} ><div style={{"background-color":"red", "border-radius":"2px",  "padding-left":"6px", "padding-right":"6px", "font-size":"9px"}} >OUTCOME</div></td>
    <td style={{width:"20%", textAlign:"right"}}>-12,35 USD</td>
  </tr>
  <tr>
    <td style={{width:"3%", "text-align": "left"}}><Arrows></Arrows></td>
    <td style={{width:"20%"}}>24/04/2020</td>
    <td style={{width:"50%" , "text-align": "left"}}>Joe Doe</td>
    <td style={{width:"65px", height: "16px"}} ><div style={{"background-color":"green", "border-radius":"2px",  "padding-left":"6px", "padding-right":"6px", "font-size":"9px"}} >OUTCOME</div></td>
    <td style={{width:"20%", textAlign:"right"}}>-12,35 USD</td>
  </tr>
  <tr>
    <td style={{width:"3%", "text-align": "left"}}><Arrows></Arrows></td>
    <td style={{width:"20%"}}>24/04/2020</td>
    <td style={{width:"50%" , "text-align": "left"}}>Joe Doe</td>
    <td style={{width:"65px", height: "16px"}} ><div style={{"background-color":"red", "border-radius":"2px",  "padding-left":"6px", "padding-right":"6px", "font-size":"9px"}} >OUTCOME</div></td>
    <td style={{width:"20%", textAlign:"right"}}>-12,35 USD</td>
  </tr>

  
</table>
<div className="moreTransactions">See all transactions</div>
</div>

            <div className="boxShapeTopPage"><DotPattern></DotPattern></div>
            <div className="boxShapeBottomPage"><DotPattern></DotPattern></div>
            </div></div>
    )
}

export default TransactionsPage;