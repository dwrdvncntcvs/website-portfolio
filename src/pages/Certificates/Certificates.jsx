import React, { useState } from "react";
import { useEffect } from "react";
import { OutletHeader } from "../../components";
import { useCertificateContext } from "../../hooks/dataHooks";
import "./certificates.scss";

export default function Certificates() {
  const { state, getCertData } = useCertificateContext();
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    getCertData();
  }, []);

  const data = state?.certificateData?.data;

  return (
    <div className="ct__main-container">
      <OutletHeader title={"certificates"} />
      <section className="ct__content-container">
        {data?.certificates.map(({ imageUrl, title }, i) => (
          <div
            key={i}
            className="ct__card"
            onMouseEnter={() => {
              setShow(true);
              setId(i);
            }}
            onMouseLeave={() => setShow(false)}
          >
            {show && id === i && <span>{title}</span>}
            <img src={imageUrl} alt={title} />
          </div>
        ))}
      </section>
    </div>
  );
}
