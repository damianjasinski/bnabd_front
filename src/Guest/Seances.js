import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/GuestNavbar";
import { Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardItem from "./CardItem";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "./Footer";

const axios = require("axios").default;

const backgroundStyle = {
  paperContainer: {
    backgroundColor: `black`,
    borderRadius: "0",
    minHeight: "100vh",
  },
};

const Seances = () => {
  const [seances, setSeances] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    const data = axios
      .get("http://localhost:8080/api/seance/get/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setSeances(response.data.seances);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(seances);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (sessionStorage.getItem("jwt")) {
    return <Navigate to="/redirect" />;
  }

  return (
    <Paper style={backgroundStyle.paperContainer}>
      <Navbar />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "90vh",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center", mb: 5 }}>
          {" "}
          Aktualne seanse
        </Typography>
        <Carousel
          dynamicHeight={true}
          centerMode={true}
          swipeable={true}
          emulateTouch={true}
          centerSlidePercentage={85}
  
        >
          {seances.map((seance) => {
            return <CardItem seance={seance}></CardItem>;
          })}
        </Carousel>
      <Footer></Footer>
      </Box>
    </Paper>
    
  );
};

export default Seances;

// <Carousel
//   dynamicHeight={true}
//   centerMode={true}
//   swipeable={true}
//   emulateTouch={true}
//   centerSlidePercentage={80}
// >
//   {seances.map((seance) => {
//     return <CardItem seance={seance}></CardItem>;
//   })}
// </Carousel>
