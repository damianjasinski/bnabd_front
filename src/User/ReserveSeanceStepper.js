import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Container from "@mui/material/Container";
import Step from "@mui/material/Step";
import Grid from "@mui/material/Grid";
import StepLabel from "@mui/material/StepLabel";
import ReserveCardItem from "./ReserveCardItem";
import StepComponents from "./StepComponents";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
const axios = require("axios").default;

const backgroundStyle = {
  paperContainer: {
    backgroundColor: `black`,
    borderRadius: "0",
    minHeight: "100vh",
  },
};

const ReserveSeance = () => {
  const { state } = useLocation();
  const seance = JSON.parse(state.seance);
  const [selectedSeat, setSelectedSeat] = React.useState(" ");
  const [selectedCard, setSelectedCard] = React.useState(null);
  const steps = ["Miejsce " + selectedSeat, "Płatność"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const token = sessionStorage.getItem("jwt");

  const isStepOptional = (step) => {
    return step === 2;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const addOrder = () => {
    const order = {
      users: {
        id: sessionStorage.getItem("id"),
      },
      seance: {
        id: seance.id,
      },
      payment: {
        ammount: 16,
        finalized: true,
        paymentCard: {
          cardNumber: selectedCard,
        },
      },
      seat: {
        id: selectedSeat,
      },
    };
    console.log(order);
    const data = axios
      .post("http://localhost:8080/api/order/add", order, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1 && selectedCard == null) {
      return;
    }
    if (
      activeStep === steps.length - 2 &&
      (selectedSeat == null || !selectedSeat || selectedSeat === " ")
    ) {
      return;
    }

    if (activeStep === steps.length - 1) {
      addOrder();
      console.log("Finished");
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  console.log(selectedSeat);
  console.log(selectedCard);

  if (sessionStorage.getItem("jwt") == null) {
    return <Navigate to="/register" />;
  }

  return (
    <Paper style={backgroundStyle.paperContainer}>
      <Navbar />
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            minHeight: "90vh",
          }}
        >
          <Grid container sx={{ mt: 2 }}>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                backgroundColor: "#303131",
                minHeight: "40vh",
                display: "flex",

                flexDirection: "column",
              }}
            >
              <Stepper sx={{ mt: 3 }} activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps} sx={{ mx: 3 }}>
                      <StepLabel
                        StepIconProps={{
                          style: { color: "#e87800", fontSize: "25px" },
                        }}
                        {...labelProps}
                      >
                        <Typography>{label}</Typography>
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>

              {activeStep === steps.length ? (
                <Box sx={{ mt: "auto", mb: "auto" }}>
                  <Typography
                    variant="h4"
                    sx={{ mt: 2, mb: 1, textAlign: "center" }}
                  >
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      pt: 2,
                      mt: "auto",
                    }}
                  >
                    <Box sx={{ flex: "1 1 auto" }} />
                  </Box>
                </Box>
              ) : (
                <Container sx={{ mt: "auto", mb: "auto" }}>
                  <StepComponents
                    step={activeStep}
                    seanceId={seance.id}
                    seatSetter={setSelectedSeat}
                    cardSetter={setSelectedCard}
                  ></StepComponents>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      size="large"
                      sx={{ mr: 1, color: "#e87800" }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button
                      size="large"
                      onClick={handleNext}
                      sx={{ color: "#e87800" }}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </Container>
              )}
            </Grid>
            <Grid item xs={12} md={12} sx={{ backgroundColor: "#303131" }}>
              <ReserveCardItem seance={seance} sx={{}}></ReserveCardItem>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
};

export default ReserveSeance;
