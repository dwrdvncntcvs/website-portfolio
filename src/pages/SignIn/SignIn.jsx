import React, { useState } from "react";
import { useAuth } from "../../hooks/dataHooks";
import "./signIn.scss";

export default function SignIn() {
  const { signInRequest } = useAuth()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInAction = (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };

    signInRequest(credentials)
    console.log(credentials)
  };

  const inputFields = [
    {
      type: "email",
      placeholder: "Email Address",
      value: email,
      action: (e) => setEmail(e.target.value),
    },
    {
      type: "password",
      placeholder: "Password",
      value: password,
      action: (e) => setPassword(e.target.value),
    },
  ];

  return (
    <div>
      <form onSubmit={signInAction}>
        {inputFields.map(({ type, placeholder, value, action }, i) => (
          <input
            key={i}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={action}
          />
        ))}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
