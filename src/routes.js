import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Guest/Login";
<<<<<<< HEAD
import Register from "./Guest/Register";    
=======
import Register from "./Guest/Register";
>>>>>>> 606ec01e9408dbfac291a7ade1c2c09d8908051b
import Orders from "./Order/Order";
import Payment from "./Payment/Payment";
import Welcome from "./Welcome/Welcome";
import RedirectCheck from "./Util/RedirectCheck";
import Logged from "./User/Seances";
import ReserveSeance from "./User/ReserveSeanceStepper";
import Seances from "./Guest/Seances";
import PaymentCards from "./User/PaymentCards";
<<<<<<< HEAD
import Profile from "./User/Profile";
=======
import AboutUs from "./Guest/AboutUs";
>>>>>>> 606ec01e9408dbfac291a7ade1c2c09d8908051b

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
<<<<<<< HEAD
            <Route path ="/profile" element = {<Profile />} />
=======
            <Route path="/about_us" element = {<AboutUs />} />
>>>>>>> 606ec01e9408dbfac291a7ade1c2c09d8908051b
        </Routes>
    </Router>

    )
}

export default Reroute;