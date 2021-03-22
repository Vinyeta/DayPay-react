import { useState, useEffect, useContext } from "react";
import "./RequestBox.css";
import Moment from "moment";
import { API_ROOT } from "../../hostSettings";
import Modal from "react-modal";
import Button from "../Button/Button";
import { UserContext } from "../../user-context";

const updateRequest = (requestId, status, token) => {
  const body = {
    status: status,
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },

    body: JSON.stringify(body),

    method: "PATCH",
  };

  fetch(`${API_ROOT}api/requestMoney/${requestId}`, options).then((response) =>
    response.json()
  );
};

const RequestBox = () => {
  const { user, token, wallet } = useContext(UserContext);

  const accepting = (wallet, requestAmount, requestEmail) => {
    const body = {
      sender: wallet,
      receiver: requestEmail,
      amount: requestAmount,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    };

    fetch(`${API_ROOT}api/queue/msg`, options).then((response) =>
      response.json()
    );
  };

  const customStyles = {
    content: {
      top: "50%",
      width: "150px",
      height: "150px",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [requests, setRequests] = useState([]);

  const [updateTrans, setUpdate] = useState(false);

  useEffect(() => {
    const options = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    };

    fetch(`${API_ROOT}api/requestMoney/${user._id}/user`, options)
      .then((response) => response.json())
      .then((json) => {
        setRequests(json);
      });
      // eslint-disable-next-line
  }, [user]);

  const [hasConfirmed, setHasConfirmed] = useState(false);

  return (
    <>
      {requests &&
        requests.map((request, index) => (
          <div className={`RequestBox_container_${request.status}`}>
            <div className="Request_data">
              <div className="Request_date">
                {Moment(request.date).format("DD.MM.YYYY HH:MM")}
              </div>
              {request.sender && request.sender.author && (
                <div className="Request_title">
                  Sent by {request.sender.author.name}
                </div>
              )}
              {request.sender && request.sender.author && (
                <div className="Request_subtitle">
                  {request.sender.author.name} requested a payment
                </div>
              )}
              <div className="Request_amount">{request.amount}</div>
            </div>
            <div className="modal_container">
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="sending_money">
                  Are you sure you want accept? The money will be sent
                  automatically. Click 'Accept againg to send'
                </div>
                <div className="button_container2">
                  <Button
                    buttonClass="defaultButton_featured"
                    onClick={() => {
                      closeModal();

                      setHasConfirmed(true);
                    }}
                    value="OK"
                  />
                </div>
              </Modal>
            </div>
            {request.status === "pending" && (
              <div className="Request_buttons">
                <div
                  className="Request_button_accept"
                  onClick={() => {
                    if (!hasConfirmed) openModal();
                    else {
                      accepting(
                        wallet,
                        request.amount,
                        request.sender.author.email
                      );
                      updateRequest(request._id, "accepted", token);
                      setUpdate(!updateTrans);
                      setHasConfirmed(false);
                    }
                  }}
                >
                  Accept
                </div>
                <div
                  className="Request_button_reject"
                  onClick={() => {
                    updateRequest(request._id, "rejected", token);
                    setUpdate(!updateTrans);
                  }}
                >
                  Reject
                </div>
              </div>
            )}

            {request.status === "accepted" && (
              <div className="Request_status_accepted">ACCEPTED AND SENT</div>
            )}

            {request.status === "rejected" && (
              <div className="Request_status_rejected">REJECTED</div>
            )}
          </div>
        ))}
    </>
  );
};

export default RequestBox;
