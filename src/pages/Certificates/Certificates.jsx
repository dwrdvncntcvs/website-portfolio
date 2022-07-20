import React from "react";
import { OutletHeader } from "../../components";
import "./certificates.scss";

export default function Certificates() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8 ];

  return (
    <div className="ct__main-container">
      <OutletHeader title={"certificates"} />
      <section className="ct__content-container">
        {array.map(() => (
          <div className="ct__card"></div>
        ))}
      </section>
    </div>
  );
}
