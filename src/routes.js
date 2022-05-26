import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Guest/Login";
import Register from "./Guest/Register";    
import Orders from "./Order/Order";
import Payment from "./Payment/Payment";
import Welcome from "./Welcome/Welcome";
import RedirectCheck from "./Util/RedirectCheck";
import Logged from "./User/Seances";
import ReserveSeance from "./User/ReserveSeanceStepper";
import Seances from "./Guest/Seances";
import PaymentCards from "./User/PaymentCards";
import Profile from "./User/Profile";

const Reroute = () => {
    return(
    <Router>
        <Routes>
            <Route exact path="/" element = {<Welcome/>} />
            <Route path="/login" element = {<Login />} />
            <Route path="/redirect" element = {<RedirectCheck />} />
            <Route path="/register" element = {<Register />} />
            <Route path="/seances" element = {<Welcome />} />
            <Route path="/orders" element = {<Orders />} />
            <Route path="/payment" element = {<Payment />} />
            <Route path="/reserve" element = {<ReserveSeance />} />
            <Route path="/logged_view" element = {<Logged />} />
            <Route path="/guest_view" element = {<Seances />} />
            <Route path="/add/paymentcard" element = {<PaymentCards />} />
            <Route path ="/profile" element = {<Profile />} />
        </Routes>
    </Router>

    )
}

export default Reroute;