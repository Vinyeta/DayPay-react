import Logo from "../../utils/daypaylogo.png";
import "./RequestBox.css";
import { useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import Moment from 'moment';



const updateRequest = (requestId, status) => {

        
    var body = {}
    
    if (status === "accepted") {
        body = JSON.stringify({
        status : status
    })} else {
        body = JSON.stringify(
            {
            status : status
        })
    };

    console.log(body)
    console.log(requestId)

    
    const options = {

        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJhYjczZmVkYWJhNjY4MzBiN2ExNDEiLCJpYXQiOjE2MTM1Nzg1OTB9.1jXP9kYnGogDcHjPSNFTgpK0k1r5FR9_kc0EsZUSI30"

        },

        body: body,

        method: "PATCH"

    }
            
    fetch(`http://localhost:5000/api/requestMoney/${requestId}`, options)
                .then((response) => response.json())

}


const RequestBox = () => {

    const user = {_id: "602ab73fedaba66830b7a141"}

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJhYjczZmVkYWJhNjY4MzBiN2ExNDEiLCJpYXQiOjE2MTM1Nzg1OTB9.1jXP9kYnGogDcHjPSNFTgpK0k1r5FR9_kc0EsZUSI30"

    // const request = 
    
    // {_id: "60328b9adb363344e4bccd2e",
    // sender: "602ab73fedaba66830b7a141",
    // receiver :"602d4c3ab14a9b694bbc7773",
    // amount: 555,
    // status: "rejected",
    // date: Date("2021-02-21T16:32:05.238+00:00")}

    const [requests, setRequests] = useState([])

    const [updateTrans, setUpdate] = useState(false)

    const CENTS_CONVERTER = 100;





    useEffect(() => {

        const options = {

        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token

        }

        }
            
        fetch(`http://localhost:5000/api/requestMoney/${user._id}/user`, options)
                  .then((response) => response.json())
                  .then((json) => {
                      console.log(json)
                      setRequests([json]);
                    })

            

        
      }, [!updateTrans])


    return (
        <>
        {requests.map((request) => ( 
        <div className={`RequestBox_container_${request.status}`}>
            <div className="Request_data">
                <div className="Request_date">{Moment(request.date).format('DD.MM.YYYY HH:MM')}</div>
                <div className="Request_title">Sent to John</div>
                <div className="Request_subtitle">Maria requested a payment</div>
                <div className="Request_amount">{Number(request.amount / CENTS_CONVERTER).toFixed(2)}<span className="request_currency">$</span></div>
            </div>

            { request.status === "pending" &&
                
            <div className="Request_buttons">
                <div className="Request_button_accept" onClick={() => {updateRequest(request._id, "accepted"); setUpdate(!updateTrans)}}>Accept</div>
                <div className="Request_button_reject" onClick={() => {updateRequest(request._id, "rejected"); setUpdate(!updateTrans)}}>Reject</div>
            </div>

            }  

            { request.status === "accepted" &&
                
            <div className="Request_status_accepted">
                ACCEPTED AND SENT
            </div>

            }   

            { request.status === "rejected" &&
                
                <div className="Request_status_rejected">
                REJECTED
                </div>
    
                }  

        </div>))
    }
    </>
    )
}

export default RequestBox;