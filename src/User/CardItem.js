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
import Container from "@mui/material/Container";

const CardItem = (props) => {
  return (
    <Card  sx={{ mx : 1  }}>
      <Grid container>
        <Grid
          item
          xs={7}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",


          }}
        >
          <Box sx = {{mt :"auto"}}>
            <CardContent sx={{}}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center", justifyContent: "center",  fontWeight : "bold" }}
              >
                {props.seance.titles.name}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textAlign: "center", justifyContent: "center",  fontWeight : "bold" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mt: 6, textAlign: "left", textAlign: "center",  fontWeight : "bold" }}
              >
                Kiedy : {props.seance.seanceDate}
              </Typography>
            </CardContent>
          </Box>
          <Box sx={{ mt: "auto", mx: "auto" }}>
            <CardActions>
              <Link
                to={"/reserve"}
                state={{ seance: JSON.stringify(props.seance) }}
                style={{ textDecoration: "none" }}
              >
                <Button  size="large" sx={{ color: "#e87800", fontWeight: 600, fontSize : "1.1em"  }}>
                  Zarezerwuj
                </Button>
              </Link>
            </CardActions>
          </Box>
        </Grid>
        <Grid item xs={5} md={6}>
          <CardMedia
            component="img"
            height="650"
            image={props.seance.titles.imUrl}
            alt="green iguana"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardItem;
