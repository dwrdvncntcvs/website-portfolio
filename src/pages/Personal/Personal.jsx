import React from "react";
import { useEffect } from "react";
import { usePersonalContext } from "../../hooks/dataHooks";
import "./personal.scss";

export default function Personal() {
  const { state, getPersonalData } = usePersonalContext();

  useEffect(() => {
    getPersonalData();
  }, []);

  const data = state?.personalData?.data;

  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.birthday}</p>
      <p>{data?.address}</p>
      <p>You may contact me through email or message:</p>
      <ul>
        <li>{data?.email}</li>
        <li>+63{data?.contactNumber}</li>
      </ul>
    </div>
  );
}
