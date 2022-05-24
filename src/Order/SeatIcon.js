import Container from "@mui/material/Container";
import WeekendIcon from "@mui/icons-material/Weekend";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import React from "react";
import { IconButton } from "@mui/material";
const SeatIcon = (props) => {
  const handleSelect = (event) => {
    props.selectedSetter(event.target.id)
    props.seatSetter(event.target.id)
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        justifyContent: " center",
        alignItems: "center",
      }}
    >
      <IconButton id={props.seatId} onClick={handleSelect}>
        <WeekendIcon onClick={handleSelect} id={props.seatId} sx = {{color : props.seatColor}} fontSize="large"></WeekendIcon>
      </IconButton>
      <Typography
        onClick={handleSelect}
        id={props.seatId}
        style={{ userSelect: "none" }}
        sx={{
          position: "absolute",
          mb: 0.8,
          fontSize: "1em",
          color: "black",
          fontWeight: "bold",
          fontFamily: "Monospace",
        }}
      >
        {props.seatId}
      </Typography>
    </Box>
  );
};

export default SeatIcon;
