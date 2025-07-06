import React, { useState } from "react";

const USERS = ["ARAVIND", "MANOHAR", "MAHESH"];

export default function Login({ onLogin }) {
  const [user, setUser] = useState(USERS[0]);

  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem("user", user);
    onLogin(user);
  }

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
      <select value={user} onChange={e => setUser(e.target.value)}>
        {USERS.map(u => <option key={u}>{u}</option>)}
      </select>
      <button type="submit">Login</button>
    </form>
  );
}
