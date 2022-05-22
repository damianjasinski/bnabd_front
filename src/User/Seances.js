import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardItem from "./CardItem";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const axios = require("axios").default;

const backgroundStyle = {
  paperContainer: {
    backgroundColor: `white`,
    borderRadius: "0",
    minHeight: "100vh",
  },
};

const carouselButtonStyles = {
  button: {
    borderStyle: "solid",
    borderWidth: "1.5px",
    borderRadius: "5px",
    color: "#e87800",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "8px 16px",
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
          Authorization: `Basic ${token}`,
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

  if (!sessionStorage.getItem("jwt")) {
    return <Navigate to="/redirect" />;
  }

  return (
    <Paper
      style={backgroundStyle.paperContainer}
      sx={{ backgroundSize: "auto"}}
    >
      <Box sx={{ backgroundColor: "black", height: "105vh" }}>
        <Navbar />
        <Container>
          <Box sx={{ backgroundColor: "#303131", textAlign: "center", height : "4vh"}}>
            <Typography variant="h5" gutterBottom component="div" sx ={{color: "#e87800"}}>
              Aktualne seanse
            </Typography>
          </Box>
        </Container>
        <Container>
          <Box sx={{ mt: 6 }}>
            <Carousel
              dynamicHeight={true}
              centerMode={true}
              swipeable={true}
              emulateTouch={true}
              centerSlidePercentage={80}
            >
              {seances.map((seance) => {
                return (
                  <CardItem
                    seance = {seance}
                  ></CardItem>
                );
              })}
            </Carousel>
          </Box>
        </Container>
      </Box>
    </Paper>
  );
};

export default Seances;
