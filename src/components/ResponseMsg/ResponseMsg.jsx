import React from "react";
import "./responseMsg.scss";

export default function ResponseMsg({ message, status }) {
  return <section className="sm__main-container">{message}</section>;
}
