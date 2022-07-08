import React, { useState } from "react";
import "./tooltip.scss";

export default function Tooltip({ children, title }) {
  const [show, setShow] = useState(false);

  return (
    <div id="t__tooltip" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {show && <p>{title}</p>}
      {children}
    </div>
  );
}
