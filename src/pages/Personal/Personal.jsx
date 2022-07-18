import React from "react";
import { PageHeader } from "../../components";
import "./personal.scss";

export default function Personal() {
  return (
    <div>
      <PageHeader title="personal"/>
      <p>Edward Vincent L. Cuevas</p>
      <p>You may contact me through email or message:</p>
      <ul>
        <li>edwardvincentcuevas7@gmail.com</li>
        <li>+639456792203</li>
      </ul>
    </div>
  );
}
