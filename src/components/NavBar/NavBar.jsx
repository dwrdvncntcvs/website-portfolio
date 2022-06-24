import React from "react";
import "./navBar.scss";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  if (location.pathname === "/sign-in") return null;

  return <div>NavBar</div>;
}
