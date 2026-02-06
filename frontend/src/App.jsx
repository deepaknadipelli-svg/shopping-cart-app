import React from "react";
import { useState } from "react";
import Login from "./components/Login";
import ItemList from "./components/ItemList";
import Navbar from "./components/Navbar";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  return loggedIn ? (
    <>
      <Navbar setLoggedIn={setLoggedIn} />
      <ItemList />
    </>
  ) : (
    <Login setLoggedIn={setLoggedIn} />
  );
}