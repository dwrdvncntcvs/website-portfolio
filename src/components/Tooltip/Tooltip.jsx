import React, { useState } from "react";
import "./tooltip.scss";

export default function Tooltip({ children, title, position }) {
  const [show, setShow] = useState(false);

  const getDesignId = () => {
    let pos;

    if (position === "right") pos = "t__right";

    if (position === "top") pos = "t__top";

    if (position === "") pos = "t__none";
    return pos;
  };

  return (
    <div
      id="t__tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && <p className={getDesignId(position)}>{title}</p>}
      {children}
    </div>
  );
}
