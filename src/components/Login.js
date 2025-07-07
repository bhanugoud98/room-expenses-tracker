import React, { useState } from "react";
import { USERS } from "../users";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    const user = USERS.find(
      u => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem("user", username); // Save login
      onLogin(username);
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="User ID"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
    </form>
  );
}
