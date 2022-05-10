import React from "react";
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";

export default function Seances() {
  if (!sessionStorage.getItem("user")) {
    return <Navigate to="/redirect" />;
  }
  return (
    <div>
      <Navbar />
    </div>
  );
}
