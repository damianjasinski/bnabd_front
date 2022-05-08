import React from 'react'
import { Navigate } from "react-router-dom"

export default function RedirectCheck() {
  if (sessionStorage.getItem("jwt") && sessionStorage.getItem("role") == "USER") {
    return <Navigate to="/register" />
  }
  else if (sessionStorage.getItem("jwt") && sessionStorage.getItem("role") == "ADMIN") {
    return <Navigate to="/" />
  }
}
