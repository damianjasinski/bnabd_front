import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Guest/Login";
import Register from "./Guest/Register";
import Seats from "./User/Order/Seats";
import Payment from "./Payment/Payment";
import Welcome from "./Welcome/Welcome";
import RedirectCheck from "./Util/RedirectCheck";
import Logged from "./User/Seances";
import ReserveSeance from "./User/ReserveSeanceStepper";
import Seances from "./Guest/Seances";
import PaymentCardAdd from "./User/PaymentCard/PaymentCardAdd";
import PaymentCards from "./User/PaymentCard/PaymentCardDisplay";
import Profile from "./User/Profile";
import AboutUs from "./Guest/AboutUs";
import DisplayOrders from "./User/Order/DisplayOrders";
import AdminPage from "./Admin/LandingPage";
import AdminSeances from "./Admin/Seances";

const Reroute = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/redirect" element={<RedirectCheck />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seances" element={<Welcome />} />
        <Route path="/seats" element={<Seats />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/reserve" element={<ReserveSeance />} />
        <Route path="/logged_view" element={<Logged />} />
        <Route path="/guest_view" element={<Seances />} />
        <Route path="/add/paymentcard" element={<PaymentCardAdd />} />
        <Route path="/get/paymentcards" element={<PaymentCards />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/get/orders" element={<DisplayOrders />} />

        <Route path="/admin/seances" element={<AdminSeances />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default Reroute;
