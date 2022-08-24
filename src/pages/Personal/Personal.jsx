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
import { OutletHeader } from "../../components";

export default function Personal() {
  const { state, getPersonalData } = usePersonalContext();

  useEffect(() => {
    getPersonalData();
  }, []);

  const data = state?.personalData?.data;

  const h2Values = [
    { value: data?.email, Icon: HiAtSymbol },
    { value: data?.address, Icon: HiLocationMarker },
    { value: data?.contactNumber, Icon: HiDeviceMobile },
    { value: data?.birthday, Icon: HiCalendar },
    { value: data?.nationality, Icon: HiGlobeAlt },
  ];

  return (
    <div className="pl__main-container">
      <OutletHeader title={data?.title} />
      <div className="pl__content-container">
        {data?.description.map((value, i) => (
          <p key={i}>
            {i < 1 && (
              <>
                Hey there! I'm <span>{data?.name}</span>.
              </>
            )}{" "}
            {value}
          </p>
        ))}
        {h2Values.map(({ Icon, value }, i) => (
          <h2 key={i}>
            <Icon />
            {value}
          </h2>
        ))}
      </div>
    </div>
  );
}
