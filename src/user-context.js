import * as React from "react";
import jwt from "jsonwebtoken";

export const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  const [wallet, setWallet] = React.useState(null);
  const [decodifiedToken, setDecodifiedToken] = React.useState('null');


  const login = (body) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:5000/api/auth/login", options)
      .then(response => response.json())
      .then(json => {
        setToken(json);
        setDecodifiedToken(jwt.decode(json));
        localStorage.setItem('token', token);
      })
      .catch(error => console.log(error))
  }

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    setDecodifiedToken(null);
  }

  React.useEffect(() => {
    if (token) {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      fetch(`http://localhost:5000/api/users/${decodifiedToken._id}`, options)
        .then((response) => response.json())
        .then((json) => setUser(json))
        .then(() => {
          fetch(`http://localhost:5000/api/wallet/${decodifiedToken._id}/author`, options)
            .then((response) => response.json())
            .then((json) => {
              setWallet(json._id);
            });
        })
    }
  }, [token]);



  return (
    <UserContext.Provider
      value={{ login, user, token, decodifiedToken, wallet, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserProvider };