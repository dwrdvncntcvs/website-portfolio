import React from "react";
import "./pageContainer.scss";

export default function PageContainer({ children, className = "" }) {
  return (
    <section className={`pc__main-container ${className}`}>{children}</section>
  );
}
