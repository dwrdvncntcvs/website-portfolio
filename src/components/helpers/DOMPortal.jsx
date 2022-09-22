import React from "react";
import ReactDOM from "react-dom";

export default function DOMPortal({ element, elementId }) {
  return ReactDOM.createPortal(element, document.getElementById(elementId));
}
