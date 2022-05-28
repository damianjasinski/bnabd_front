import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Navbar from "../Navbar/UserNavbar";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Footer from "../Guest/Footer";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Paper, Typography } from "@mui/material";

const axios = require("axios").default;

const backgroundStyle = {
  paperContainer: {
    backgroundColor: `black`,
    borderRadius: "0",
    minHeight: "100vh",
  },
};

const PaymentCardDisplay = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("jwt");
  const [loading, setLoading] = React.useState(true);
  const [paymentCards, setPaymentCards] = React.useState({});
  const [selectedCardId, setSelectedCardId] = React.useState(0);

  React.useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    const data = axios
      .get("http://localhost:8080/api/payment_card/get/my_cards", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setPaymentCards(response.data.cards);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [loading]);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const addNewCard = () => {
    navigate("/add/paymentcard");
  };

  const setCardId = (event) => {
    setSelectedCardId(event.target.id);
  };
  const deleteCard = () => {
    if (selectedCardId === 0) {
      console.log("NUll");
    } else {
      sendDeleteRequest();
      refreshPage();
    }
  };

  const sendDeleteRequest = () => {
    const data = axios
      .delete(
        "http://localhost:8080/api/payment_card/delete/" +  selectedCardId ,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "**"
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //check if user is logged in
  if (!sessionStorage.getItem("jwt")) {
    return <Navigate to="/redirect" />;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Paper style={backgroundStyle.paperContainer}>
      <Navbar />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "80vh",
          backgroundColor: "#0d0d0d",
        }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", mb: 6, color: "white" }}
        >
          {" "}
          Twoje karty płatnicze
        </Typography>

        <Box
          sx={{
            backgroundColor: "#303131",
            minHeight: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: "5px",
          }}
        >
          <Box>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            ></Box>
            <FormControl
              color="warning"
              sx={{ minWidth: 300, mx: "auto", color: "#e87800" }}
            >
              <InputLabel id="demo-simple-select-helper-label">
                Payment Card
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
              >
                {paymentCards.map((card) => {
                  return (
                    <MenuItem
                      id={card.cardNumber}
                      onClick={setCardId}
                      value={card.cardNumber}
                    >
                      {card.cardNumber}/{card.expDate}
                    </MenuItem>
                  );
                })}
                <MenuItem onClick={addNewCard}>+ Add new card</MenuItem>;
              </Select>
              <FormHelperText>Select payment card</FormHelperText>
            </FormControl>
          </Box>
          <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
            <Button
              variant="outlined"
              color="warning"
              onClick={deleteCard}
              size="large"
              sx={{ color: "#e87800", fontWeight: "bold" }}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};
export default PaymentCardDisplay;
