import React from "react";
import { Navigate } from "react-router-dom";

const AuthCheck = () => {
  if (sessionStorage.getItem("role") != "ADMIN") {
    return <Navigate to="/redirect" />;
  }
};

export default AuthCheck;
