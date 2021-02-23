import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth, logout } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <div>
      <Button variant="link" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
