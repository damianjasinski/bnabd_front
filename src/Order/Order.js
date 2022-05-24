import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import WeekendIcon from "@mui/icons-material/Weekend";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import SeatIcon from "./SeatIcon";

const axios = require("axios").default;
const iconSize = "large";

const Order = (props) => {
  const [availableSeats, setAvailableSeats] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(-1);

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    const data = axios
      .get("http://localhost:8080/api/seat/get/available/" + props.seanceId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setAvailableSeats(response.data.seats);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    const id = event.target.name;
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container sx={{ mt: 1 }}>
      <Grid container sx={{}}>
        {availableSeats.map((seat) => {
          if (seat.id == selectedId)
            return (
              <Grid
                xs={1.2}
                md={1.2}
                sx={{
                  backgroundColor: "#303131",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <SeatIcon
                  selectedSetter={setSelectedId}
                  seatSetter={props.seatSetter}
                  seatId={seat.id}
                  seatColor="#FFD580"
                ></SeatIcon>
              </Grid>
            );
          else if (seat.available)
            return (
              <Grid
                xs={1.2}
                md={1.2}
                sx={{
                  backgroundColor: "#303131",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <SeatIcon
                  seatSetter={props.seatSetter}
                  selectedSetter={setSelectedId}
                  seatId={seat.id}
                  seatColor="#90ee90"
                ></SeatIcon>
              </Grid>
            );
          else
            return (
              <Grid
                xs={1.2}
                md={1.2}
                sx={{
                  backgroundColor: "#303131",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <SeatIcon
                  selectedSetter={setSelectedId}
                  seatSetter={props.seatSetter}
                  seatId={seat.id}
                  seatColor="#ee9090"
                ></SeatIcon>
              </Grid>
            );
        })}
      </Grid>
    </Container>
  );
};
export default Order;

{
  /* <Grid
item
xs={12}
md={12}
sx={{
  backgroundColor: "#303131",
  minHeight: "40vh",
  display: "flex",

  flexDirection: "column",
  
}}
> */
}
