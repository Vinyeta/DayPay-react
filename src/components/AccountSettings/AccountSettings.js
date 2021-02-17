
import "./AccountSettings.css"
import Button from '../Button/Button';
import { useState } from 'react';
import EditUser from '../../assets/userPictureEdit.png';


const AccountSettings = () => {


  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const body = {
    name: name,
    surname: surname,
    email: email,
    password:  password,
  };

  const cleanForm = () => {
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (id) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(`http://localhost:5000/api/users/${id}`, options).then((response) =>
      console.log(response.status)
    );

    cleanForm();
  };

  console.log(name);
  console.log(surname);
  console.log(email);
  console.log(password);


  return (
    <div className="accountSettings_container">
      <div className="boxSettings">

        <span> Edit profile</span>
        <form className="tradeForm">

          <img className="accountSettins__img" src="https://static1.abc.es/media/play/2017/09/28/avatar-kVmB--620x349@abc.jpeg" alt="Avatar" />
          <img className="accountSettins__edit" src="{userPictureEdit}" alt="" />
  

          <div className="nameData__container">
            <input className="nameInput__container" placeholder="Name"
              type="text"
              name="name"
              onChange={(e) => {setName(e.target.value); console.log(name)}}
            />

            <input className="lastNameInput__container" placeholder="Last Name"
              type="text"
              name="surname"
              onChange={(e) => {setSurname(e.target.value); console.log(surname)}}
            />     
          </div>



            <input className="input__container" placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => {setEmail(e.target.value); console.log(email)}}
          /> 

            <input className="input__container" placeholder="Password"
            type="password"
            name="password"
            onChange={(e) => {setPassword(e.target.value); console.log(password)}}
          /> 

          <Button
            style="defaultButton_featured"
            value="Save"
            onClick={() => handleSubmit()} />
        </form>
      </div>
    </div>
  )
}

export default AccountSettings;