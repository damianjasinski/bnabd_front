import React from "react";
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const backgroundStyle = {
  paperContainer: {
    backgroundColor: `black`,
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

export default function Seances() {
  if (!sessionStorage.getItem("user")) {
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
          <Grid container spacing={2} sx={{ mt: "auto" }}>
            <Grid item xs={12}>
              <Box sx={{ minWidth: 50 }}>
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={15}
                  visibleSlides={2}
                  totalSlides={3}
                >
                  <Slider>
                    <Slide index={0}>I am the first Slide.</Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
                    <Slide index={2}>I am the third Slide.</Slide>
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
            </Grid>
          </Grid>
        </Container>
      </div>
    </Paper>
  );
}
