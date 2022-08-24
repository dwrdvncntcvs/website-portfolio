import React, { useState } from "react";
import { useMemo } from "react";
import { useContactContext } from "../../hooks/dataHooks";
import useWindowDimensions from "../../hooks/screenHooks";
import "./contactForm.scss";

const { innerWidth } = window;

export default function ContactForm() {
  const { sendEmailRequest } = useContactContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { width } = useWindowDimensions();

  const inputFields = [
    {
      placeholder: "Name",
      type: "text",
      className: width > 500 ? "start-2-col" : "full-col",
      value: name,
      action: (e) => setName(e.target.value),
    },
    {
      placeholder: "Email",
      type: "email",
      className:  width > 500 ? "end-2-col" : "full-col",
      value: email,
      action: (e) => setEmail(e.target.value),
    },
    {
      placeholder: "Subject",
      type: "text",
      className: "full-col",
      value: subject,
      action: (e) => setSubject(e.target.value),
    },
  ];

  const getDefault = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const sendAction = async (e) => {
    e.preventDefault();
    const body = {
      name,
      email,
      subject,
      message,
    };

    await sendEmailRequest(body);
    getDefault();
  };

  return (
    <form className="cf__form-container" onSubmit={sendAction}>
      <div className="cf__grid-container">
        {inputFields.map(
          ({ placeholder, type, className, value, action }, i) => (
            <div key={i} className={`cf__form-group ${className}`}>
              <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={action}
              />
            </div>
          )
        )}
        <textarea
          className={` full-col`}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button id="cf__submit-btn">Send</button>
    </form>
  );
}
