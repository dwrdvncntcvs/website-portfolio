import React from "react";
import { useOutletContext } from "react-router-dom";
import { ACCESS_VAR } from "../../utils/variables";
import "./home.scss";

export default function Home() {
  const { access } = useOutletContext();

  return (
    <div>
      <h1>{access === ACCESS_VAR.PRIVATE ? "Admin Home" : "Home"}</h1>
    </div>
  );
}
