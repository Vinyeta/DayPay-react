import * as React from "react";

export const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  const [wallet, setWallet] = React.useState(null);


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
        console.log(json.user);
        setToken(json.token);
        setUser(json.user);
      })
      .catch(error => console.log(error))
  }

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  }

  React.useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
          fetch(`http://localhost:5000/api/wallet/${user._id}/author`, options)
            .then((response) => response.json())
            .then((json) => {
              setWallet(json._id);
            });
    }
  }, [user]);



  return (
    <UserContext.Provider
      value={{ login, user, token, wallet, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserProvider };