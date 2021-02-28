import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  function logout() {
    sessionStorage.removeItem("authToken");
  }
  return (
    <div>
      <h1>Profile Page</h1>
      <Link to="/">
        <p onClick={logout}>Log out</p>
      </Link>
    </div>
  );
}
