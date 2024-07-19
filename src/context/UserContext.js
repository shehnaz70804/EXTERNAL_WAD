// context/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const validateUser = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setLoggedInUser(user);
    }
    return user;
  };

  const isLoggedIn = () => {
    return loggedInUser !== null;
  };

  return (
    <UserContext.Provider value={{ addUser, validateUser, isLoggedIn, loggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
