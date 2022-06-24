import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/dataHooks";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
  const { state } = useAuth();

  return state.user ? <Outlet /> : <Navigate to="/" />;
}
