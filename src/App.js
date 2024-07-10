import React from "react";
import Main from "./pages";
import AuthProvider from "./components/Auth/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

export default App;
