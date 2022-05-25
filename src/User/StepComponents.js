import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Order from "../Order/Order";
import Box from "@mui/material/Box";
import {useNavigate} from 'react-router-dom';


const axios = require("axios").default;

const StepComponents = (props) => {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const [paymentCards, setPaymentCards] = React.useState({});

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
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const selectCard = (event) => {
      props.cardSetter(event.target.id)
  };

  const addNewCard = () => {
      navigate("/add/paymentcard")
  }

  if (props.step == 0) {
    return <Order seatSetter = {props.seatSetter} seanceId = {props.seanceId}></Order>;
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FormControl
          color="warning"
          sx={{ mt: 5, minWidth: 300, mx: "auto", color: "#e87800" }}
        >
          <InputLabel id="demo-simple-select-helper-label">
            Payment Card
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Payment Cards"
            onChange={handleChange}
          >
            {paymentCards.map((card) => {
              return (
                <MenuItem
                  id={card.cardNumber}
                  value={card.cardNumber}
                  onClick={selectCard}
                >
                  {card.cardNumber}/{card.expDate}
                </MenuItem>
              );
            })}
            <MenuItem onClick = {addNewCard}>+ Add new card</MenuItem>;
          </Select>
          <FormHelperText>Select payment card</FormHelperText>
        </FormControl>
      </Box>
    );
  }
};

export default StepComponents;
