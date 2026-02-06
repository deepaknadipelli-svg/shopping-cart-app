import React from "react";
import axios from "axios";

export default function Navbar({ setLoggedIn, setView }) {
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/users/logout",
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
    } catch (err) {
      console.error(err);
    }

    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <div style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <button onClick={() => setView("items")}>Items</button>
      <button onClick={() => setView("cart")} style={{ marginLeft: "10px" }}>
        Cart
      </button>
      <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
        Logout
      </button>
    </div>
  );
}