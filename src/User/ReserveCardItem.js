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
      <Grid container >
        <Grid
          item
          xs={12}
          md={12}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"  sx={{ textAlign: "center" }}>
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
        <Grid container justifyContent="center" alignItems="center" xs={12} md={12}  >
        <img src={props.seance.titles.imUrl}  height={320} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardItem;
