import React, { useContext } from "react";
import { AuthContext } from "../components/Auth/AuthContext";
import TodoList from "./Todo/TodoList";
import LoginForm from "../components/Auth/LoginForm";

const Main = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <div className="container mx-auto px-4 py-8">
        {isLoggedIn ? <TodoList /> : <LoginForm />}
      </div>
    </div>
  );
};

export default Main;
