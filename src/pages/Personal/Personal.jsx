import React from "react";
import { useEffect } from "react";
import { usePersonalContext } from "../../hooks/dataHooks";
import "./personal.scss";
import {
  HiGlobeAlt,
  HiCalendar,
  HiLocationMarker,
  HiAtSymbol,
  HiDeviceMobile,
} from "react-icons/hi";

export default function Personal() {
  const { state, getPersonalData } = usePersonalContext();

  useEffect(() => {
    getPersonalData();
  }, []);

  const data = state?.personalData?.data;

  return (
    <div className="pl__main-container">
      <h1>{data?.title}.</h1>
      {data?.description.map((value, i) => (
        <p>
          {i < 1 && (
            <>
              Hey there! I'm <span>{data?.name}</span>.
            </>
          )}{" "}
          {value}
        </p>
      ))}
      <h2>
        <HiAtSymbol />
        {data?.email}
      </h2>
      <h2>
        <HiDeviceMobile />
        +63{data?.contactNumber}
      </h2>
      <h2>
        <HiLocationMarker />
        {data?.address}
      </h2>
      <h2>
        <HiCalendar />
        {data?.birthday}
      </h2>
      <h2>
        <HiGlobeAlt />
        {data?.nationality}
      </h2>
    </div>
  );
}
