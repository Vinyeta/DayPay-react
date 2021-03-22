import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./AccountSettings.css";
import Button from "../Button/Button";
import EyeOff from "../../assets/eye-off.svg";
import { API_ROOT } from "../../hostSettings";
import { UserContext } from "../../user-context";
import Avatar from "../Avatar/Avatar";

const AccountSettings = () => {
  const { user, token } = useContext(UserContext);

  const history = useHistory();

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');

  //code added to show/hide password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  let body = {};
  if (password === "") {
    body = {
      name: name,
      surname: surname,
      email: email,
    };
  } else {
    body = {
      name: name,
      surname: surname,
      email: email,
      password: password
    }
  }

  const handleSubmit = (id) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    };

    fetch(`${API_ROOT}api/users/${id}`, options).then((response) => {
      history.push("/dashboard");
    });
  };

  return (
    <>
      {user && (
        <div className="accountSettings_container">
          <div className="boxSettings">
            <span> Edit profile</span>
            <form className="tradeForm">
              <div className="accountSettings__img">
                <Avatar user={user} />
              </div>
            {user &&
            <>
              <div className="nameData__container">
                <input
                  className="nameInput__container"
                  type="text"
                  name="name"
                  placeholder={user.name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  className="lastNameInput__container"
                  type="text"
                  name="surname"
                  placeholder={user.surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>

              <input
                className="input__container"
                type="email"
                name="email"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                required
                className="input__container"
                placeholder="Password"
                type={passwordShown ? "text" : "password"}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              </>
            }
              <img
                className="eyeOff"
                src={EyeOff}
                alt="eye off"
                onClick={togglePasswordVisiblity}
              />

              <Button
                buttonClass="defaultButton_featured"
                value="Save"
                onClick={() => handleSubmit(user._id)}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountSettings;
