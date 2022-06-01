
import React from 'react'
import { ToastContainer } from "react-toastify";

const ToastEmitter = () => {
  return (
    <ToastContainer
    position="top-center"
    autoClose={2500}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
  )
}

export default ToastEmitter