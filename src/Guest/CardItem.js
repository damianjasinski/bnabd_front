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
    <Container>
      <Card sx={{}}>
        <Grid spacing={2}>
          <Grid
            item
            xs={7}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.seance.titles.name}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textAlign: "center", mt: 2 }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mt: 6, textAlign: "left", textAlign: "center" }}
              >
                Kiedy : {props.seance.seanceDate}
              </Typography>
            </CardContent>
            <Box sx={{ mt: "auto", mx: "auto" }}>
              <CardActions>
                <Link
                  to={"/reserve"}
                  state={{ seance: JSON.stringify(props.seance) }}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    size="large"
                    sx={{ color: "#e87800", fontWeight: 600 }}
                  >
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
    </Container>
  );
};

export default CardItem;
