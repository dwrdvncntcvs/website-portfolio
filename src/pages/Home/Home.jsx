import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../firebaseConfig";
import "./home.scss";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
}
