import React from "react";
import "./pageContainer.scss";

export default function PageContainer({ children }) {
  return <section className="pc__main-container">{children}</section>;
}
