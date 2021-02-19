import Logo from "../../utils/daypaylogo.png";
import "./RequestBox.css";
import { useState } from 'react';
import { Link } from "react-router-dom";


const RequestBox = () => {



    return (
        <>

        <div className="RequestBox_container_pending">
            <div className="Request_data">
                <div className="Request_date">28.10.2021</div>
                <div className="Request_title">Sent to John</div>
                <div className="Request_subtitle">Maria requested a payment</div>
                <div className="Request_amount">18.89$</div>
            </div>

            <div className="Request_buttons">
                <div className="Request_button_accept">Accept</div>
                <div className="Request_button_reject">Reject</div>
            </div>


        </div>

        <div className="RequestBox_container_accepted">
            <div className="Request_data">
                <div className="Request_date">28.10.2021</div>
                <div className="Request_title">Sent to John</div>
                <div className="Request_subtitle">Maria requested a payment</div>
                <div className="Request_amount">18.89$</div>
            </div>

            <div className="Request_status_accepted">
            ACCEPTED AND SENT
            </div>
        </div>

        <div className="RequestBox_container_rejected">
        <div className="Request_data">
            <div className="Request_date">28.10.2021</div>
            <div className="Request_title">Sent to John</div>
            <div className="Request_subtitle">Maria requested a payment</div>
            <div className="Request_amount">18.89$</div>
            </div>

            <div className="Request_status_rejected">
            REJECTED
            </div>
        </div>

        <div className="RequestBox_container_pending">
            <div className="Request_data">
                <div className="Request_date">28.10.2021</div>
                <div className="Request_title">Sent to John</div>
                <div className="Request_subtitle">Maria requested a payment</div>
                <div className="Request_amount">18.89$</div>
            </div>

            <div className="Request_buttons">
                <div className="Request_button_accept">Accept</div>
                <div className="Request_button_reject">Reject</div>
            </div>


        </div>

        <div className="RequestBox_container_accepted">
            <div className="Request_data">
                <div className="Request_date">28.10.2021</div>
                <div className="Request_title">Sent to John</div>
                <div className="Request_subtitle">Maria requested a payment</div>
                <div className="Request_amount">18.89$</div>
            </div>

            <div className="Request_status_accepted">
            ACCEPTED AND SENT
            </div>
        </div>

        <div className="RequestBox_container_rejected">
        <div className="Request_data">
            <div className="Request_date">28.10.2021</div>
            <div className="Request_title">Sent to John</div>
            <div className="Request_subtitle">Maria requested a payment</div>
            <div className="Request_amount">18.89$</div>
            </div>

            <div className="Request_status_rejected">
            REJECTED
            </div>
        </div>
    </>
    )
}

export default RequestBox;