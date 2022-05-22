import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import CardItem from "./CardItem"
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
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

  const [seances, setSeances] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = sessionStorage.getItem("jwt")
    const data = axios
      .get("http://localhost:8080/api/seance/get/current", {
        headers: {
          'Authorization': `Basic ${token}`
        }
      })
      .then(function (response) {
        console.log(response.data)
        setSeances(response.data.seances)
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!sessionStorage.getItem("jwt")) {
    return <Navigate to="/redirect" />;
  }
  
  return (
    <Paper
      style={backgroundStyle.paperContainer}
      sx={{ backgroundSize: "auto" }}
    >
      
      <div sx={{ backgroundColor: "black" }}>
        <Navbar />
        <Container>
          <Box sx={{ mt: 5}}>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={90}
              visibleSlides={2}
              totalSlides={seances.length}
            >
              <Slider>
                <Slide index={0}><CardItem imUrl = {seances[0].titles.imUrl}></CardItem></Slide>
                <Slide index={1}><CardItem imUrl = {seances[0].titles.imUrl}></CardItem></Slide>
              </Slider>
              <Box sx={{ textAlign: "center" }}>
                <ButtonBack style={carouselButtonStyles.button}>
                  Back
                </ButtonBack>
                <ButtonNext style={carouselButtonStyles.button}>
                  Next
                </ButtonNext>
              </Box>
            </CarouselProvider>
          </Box>
        </Container>
      </div>
    </Paper>
  );
}

export default Seances
