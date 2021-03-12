import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./AccountSettings.css"
import Button from '../Button/Button';
import EditUser from '../../assets/EditUser.svg';
import EyeOff from '../../assets/eye-off.svg';



const AccountSettings = ({ user, token }) => {

  const history = useHistory();

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  //code added to show/hide password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };


  const body = {
    name: name,
    surname: surname,
    email: email,
    password:  password,
  };



  const handleSubmit = (id) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    };

    fetch(`http://localhost:5000/api/users/${id}`, options).then((response) => {
      console.log(response.status);
      history.push('/dashboard');
    }
    );

  };



  return (
    <div className="accountSettings_container">
      <div className="boxSettings">

        <span> Edit profile</span>
        <form className="tradeForm">

          <img className="accountSettings__img" src={user.avatar} alt="Avatar" />
          <img className="accountSettings__edit" src={EditUser} alt="edit user avatar" />
  

          <div className="nameData__container">
            <input className="nameInput__container" placeholder="Name"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />

            <input className="lastNameInput__container" placeholder="Last Name"
              type="text"
              name="surname"
              onChange={(e) => setSurname(e.target.value)}
            />     
          </div>



            <input className="input__container" placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          /> 

            <input required className="input__container" placeholder="Password"
            type={passwordShown ? "text" : "password"}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          /> 
          <img className="eyeOff" src={EyeOff} alt="eye off" onClick={togglePasswordVisiblity} />


          <Button
            buttonClass="defaultButton_featured"
            value="Save"
            onClick={() => handleSubmit(user._id)} />
        </form>
      </div>
    </div>
  )
}

export default AccountSettings;