import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/dataHooks";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
  const { state } = useAuth();

  console.log(state)

  return state.user ? <Outlet /> : <Navigate to="/" />;
}
