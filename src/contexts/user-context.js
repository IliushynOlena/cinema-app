import { createContext, useState } from "react";

export const UserContext = createContext({
    // username property 
    username: '',            // getter
    setUsername: () => null, // setter
    clearUsername: () => null
    // other data ...
});


export const UserProvider = ({ children }) => {

    const [ username ,setUsername] = useState('');

    // action realizations
    const clearUsername = () => setUsername("");


    const value = { username, setUsername, clearUsername };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}