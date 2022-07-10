import React, { useState } from "react";
import "./contactForm.scss";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const inputFields = [
    {
      placeholder: "Name",
      type: "text",
      className: "start-2-col",
      value: name,
      action: (e) => setName(e.target.value),
    },
    {
      placeholder: "Email",
      type: "email",
      className: "end-2-col",
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

  const sendAction = (e) => {
    e.preventDefault();
    const body = {
      name,
      email,
      subject,
      message,
    };

    console.log(body);
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