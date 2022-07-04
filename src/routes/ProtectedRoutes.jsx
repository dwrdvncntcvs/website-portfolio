import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/dataHooks";
import { Navigate } from "react-router-dom";
import { ACCESS_VAR } from "../utils/variables";
import { checkIfUserActive } from "../utils/helper";

export default function ProtectedRoutes({ access }) {
  const { state } = useAuth();
  const [component, setComponent] = useState(null);

  useEffect(() => {
    if (access === ACCESS_VAR.PUBLIC) {
      setComponent(
        checkIfUserActive(state.user) ? (
          <Navigate to="/admin" />
        ) : (
          <Outlet context={{ access }} />
        )
      );
    }

    if (access === ACCESS_VAR.PRIVATE)
      setComponent(
        checkIfUserActive(state.user) >= 1 ? (
          <Outlet context={{ access }} />
        ) : (
          <Navigate to="/" />
        )
      );
  }, [access, state.user]);

  return component;
}
