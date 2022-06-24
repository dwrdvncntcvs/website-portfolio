import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/dataHooks";
import { useNavigate } from "react-router-dom";
import "./signIn.scss";

export default function SignIn() {
  const { state, signInRequest } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(state.user).length > 0) {
      navigate("/admin");
    }
  }, [state.user]);

  const signInAction = async (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };

    await signInRequest(credentials);
    console.log(credentials);

    navigate("/admin");
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
