import React from "react";
import "./loading.scss";

export default function Loading() {
  const word = ["L", "o", "a", "d", "i", "n", "g"];

  return (
    <div className="l__main-container">
      <div className="l__dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <h1>
        {word.map((element, i) => (
          <span>{element}</span>
        ))}
      </h1>
    </div>
  );
}
