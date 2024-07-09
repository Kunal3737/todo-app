import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = (username, password) => {
    if (username === "Kunal" && password === "Kunal") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      alert("Invalid credentials!");
    }
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
