import React, { useState } from "react";
import axios from "axios";

export default function Login({ setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setLoggedIn(true);
    } catch (err) {
      if (err.response && err.response.status === 403) {
        alert("You cannot login on another device.");
      } else {
        alert("Invalid username/password");
      }
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}