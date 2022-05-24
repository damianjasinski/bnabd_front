import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <Card>
      <Grid container sx={{ mx: "auto" }}>
        <Grid item xs={12} md={7}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{ textAlign: "center", mt :2 }}
            >
              Rezerwujesz bilet na seans:
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {props.seance.titles.name}
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              {props.seance.seanceDate}
            </Typography>
          </CardContent>
        </Grid>
        <Grid align="center" justify="center" xs={12} md={5} sx={{}}>
          <img src={props.seance.titles.imUrl} height={450} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardItem;
