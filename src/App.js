import React from "react";
import AuthProvider from "./components/Auth/AuthProvider";
import Main from "./pages";

const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

export default App;
