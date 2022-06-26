import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/dataHooks";
import { Navigate } from "react-router-dom";
import { ACCESS_VAR } from "../utils/variables";

export default function ProtectedRoutes({ access }) {
  const { state } = useAuth();

  if (access === ACCESS_VAR.PRIVATE)
    return state.user ? <Outlet context={{ access }} /> : <Navigate to="/" />;
  else if (access === ACCESS_VAR.PUBLIC) {
    return state.user ? (
      <Navigate to="/admin" />
    ) : (
      <Outlet context={{ access }} />
    );
  }
}
