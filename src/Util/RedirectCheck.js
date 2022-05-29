import React from 'react'
import { Navigate } from "react-router-dom"

export default function RedirectCheck() {
  if (sessionStorage.getItem("jwt") && sessionStorage.getItem("role") == "USER") {
    return <Navigate to="/logged_view" />
  }
  else if (sessionStorage.getItem("jwt") && sessionStorage.getItem("role") == "ADMIN") {
    return <Navigate to="/admin" />
  }
  else if (sessionStorage.getItem("jwt") == null ) {
    return <Navigate to= "/guest_view" />
  }
}
