import {createContext, useEffect, useState} from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userCredentials) => {

        fetch("http://localhost:3000/login", {
            method: "POST",
            body: userCredentials,
        }).then((response) => setUser(response));
    };

    useEffect(()=> {
        login();
    }, [])

    return(<UserContext.Provider value={{user, login}}>{ children }</UserContext.Provider>)
};

