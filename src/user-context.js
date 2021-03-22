import * as React from "react";
import jwt from "jsonwebtoken";
import { API_ROOT } from "./hostSettings";

export const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  const [wallet, setWallet] = React.useState(null);
  const [decodifiedToken, setDecodifiedToken] = React.useState(
    localStorage.getItem("decodifiedToken")
  );

  const login = (body) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(`${API_ROOT}api/auth/login`, options)
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        setDecodifiedToken(jwt.decode(json.token)._id);
        localStorage.setItem("decodifiedToken", jwt.decode(json.token)._id);
      })
      .catch((error) => console.log(error));
    setTimeout(() => {
      window.location.reload();
    }, 400);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("decodifiedToken");
    setUser(null);
    setToken(null);
    setDecodifiedToken(null);
  };

  React.useEffect(() => {
    if (token) {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      fetch(`${API_ROOT}api/users/${decodifiedToken}`, options)
        .then((response) => response.json())
        .then((json) => setUser(json))
        .then(() => {
          fetch(`${API_ROOT}api/wallet/${decodifiedToken}/author`, options)
            .then((response) => response.json())
            .then((json) => {
              setWallet(json._id);
            });
        });
    }
  }, [decodifiedToken, token]);

  return (
    <UserContext.Provider value={{ login, user, token, wallet, logout }}>
      {children}
    </UserContext.Provider>
  );
}
export { UserProvider };
