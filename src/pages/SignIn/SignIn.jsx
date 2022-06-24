import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/dataHooks";
import { useNavigate } from "react-router-dom";
import { HiUser, HiEye, HiEyeOff, HiXCircle } from "react-icons/hi";
import "./signIn.scss";

export default function SignIn() {
  const { state, signInRequest, setErrorMessage } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (state.user !== null)
      if (Object.keys(state.user).length > 0) navigate("/admin");

    if (state.errorMessage !== "")
      setTimeout(() => {
        setErrorMessage();
      }, 5000);
  }, [state.user, state.errorMessage]);

  const signInAction = async (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };

    await signInRequest(credentials);
  };

  const inputFields = [
    {
      type: "email",
      placeholder: "Email Address",
      value: email,
      action: (e) => setEmail(e.target.value),
      Icon: HiUser,
      clickable: false,
    },
    {
      type: show ? "text" : "password",
      placeholder: "Password",
      value: password,
      action: (e) => setPassword(e.target.value),
      Icon: show ? HiEyeOff : HiEye,
      clickable: true,
    },
  ];

  return (
    <div className="si__main-container">
      <form onSubmit={signInAction}>
        <h1>Sign In</h1>
        {inputFields.map(
          ({ type, placeholder, value, action, Icon, clickable }, i) => (
            <div key={i} className="si__input-group">
              <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={action}
              />
              <span>
                <Icon
                  className={clickable && "si__clickable"}
                  size={25}
                  onClick={() => clickable && setShow(!show)}
                />
              </span>
            </div>
          )
        )}
        <button type="submit">Sign In</button>
      </form>
      {state.errorMessage !== "" && <p>{state.errorMessage}</p>}
    </div>
  );
}
