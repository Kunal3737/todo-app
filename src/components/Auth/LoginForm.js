import React, { useState, useContext, useCallback } from "react";
import { AuthContext } from "./AuthContext";
import Label from "../UI/Label";
import Input from "../UI/Input";
import Button from "../UI/Button";

const LoginForm = () => {
  const { loginUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      loginUser(username, password);
    },
    [loginUser, username, password]
  );

  return (
    <div className="max-w-sm mx-auto mt-10">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
