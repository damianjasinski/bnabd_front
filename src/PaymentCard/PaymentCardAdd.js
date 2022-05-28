import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/UserNavbar";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import { Container, Paper, Stack, TextField } from "@mui/material";
import Footer from "../Guest/Footer";
import { Navigate } from "react-router-dom";

const axios = require("axios").default;

const backgroundStyle = {
  paperContainer: {
    backgroundColor: `black`,
    borderRadius: "0",
    minHeight: "100vh",
  },
};

const PaymentCards = () => {
  const [inputs, setInputs] = React.useState({
    cardNumber: "",
    cvv: "",
    expDate: "",
  });
  const [cardNumberError, setCardNumberError] = React.useState(false);
  const [cvvError, setCvvError] = React.useState(false);
  const [expDateError, setExpDateError] = React.useState(false);
  const token = sessionStorage.getItem("jwt")

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };

  const sendRequest = () => {
    if (validateInputs() === true) {
      console.log("something is bad");
    }
    const paymentCard = {
      cardNumber: inputs.cardNumber,
      expDate: inputs.expDate + "/01",
      cvv: inputs.cvv,
      users: {
        id: sessionStorage.getItem("id"),
      },
    };
    console.log(paymentCard)
    const data = axios
      .post("http://localhost:8080/api/payment_card/add", paymentCard, {
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

  const refreshPage = () => {
    window.location.reload(false);
  };

  const validateInputs = () => {
    if (inputs.cardNumber.length != 16) {
      setCardNumberError(true);
      return false;
    }
    if (inputs.cvv.length != 3) {
      setCvvError(true);
      return false;
    }
    if (!/^[0-9]{2}\/[0-1]{1}[0-9]{1}$/.test(inputs.expDate)) {
      setExpDateError(true);
      return false;
    } else return true;
  };

    //check if user is logged in
    if (!sessionStorage.getItem("jwt")) {
      return <Navigate to="/redirect" />;
    }
  
  
  return (
    <Paper style={backgroundStyle.paperContainer}>
      <Navbar />
      <Typography
        variant="h3"
        sx={{ textAlign: "center", mt: 2, color: "#F5F5DC" }}
      >
        {" "}
        Dodaj kartę płatniczą
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 4,
          minHeight: "80vh",
          backgroundColor: "#0d0d0d",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#303131",
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <Container>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                "& .MuiTextField-root": { m: 2, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  error={cardNumberError}
                  id="cardNumber"
                  name="cardNumber"
                  label="Numer karty"
                  helperText="16 cyfr"
                  onChange={handleChange}
                />
                <TextField
                  error={cvvError}
                  id="cvv"
                  name="cvv"
                  label="cvv"
                  helperText="3 cyfry"
                  onChange={handleChange}
                />
              </div>

              <div>
                <TextField
                  error={expDateError}
                  id="expDate"
                  name="expDate"
                  label="Data wygaśnięcia"
                  helperText="Format: YY/MM"
                  onChange={handleChange}
                />
              </div>
              <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
                <Button
                  variant="outlined"
                  color="warning"
                  size="large"
                  sx={{ color: "#e87800", fontWeight: "bold" }}
                  onClick={refreshPage}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    color: "black",
                    backgroundColor: "#e87800",
                    fontWeight: "bold",
                  }}
                  onClick={sendRequest}
                  endIcon={<SendIcon />}
                >
                  Dodaj
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer></Footer>
    </Paper>
  );
};
export default PaymentCards;
