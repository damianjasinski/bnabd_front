import React from "react";
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";

const backgroundStyle = {
  paperContainer: {
    backgroundColor: `black`,
    borderRadius: "0",
    minHeight: "100vh"
  },
};

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Picu Bicu
      </Typography>
      <Typography variant="h5" component="div">
        grasz
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        w
      </Typography>
      <Typography variant="body2">
        FORTNIT?
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function Seances() {


  if (!sessionStorage.getItem("user")) {
    return <Navigate to="/redirect" />;
  }

  return (
    <Paper
      style={backgroundStyle.paperContainer}
      sx={{ backgroundSize: "auto" }}
    >
      <div sx={{ backgroundColor: "black" }}>
        <Navbar />
        <Container >

          <Grid container spacing={2} sx={{ mt: "auto" }}>
            <Grid item xs={4}>
              <Box sx={{ minWidth: 50 }}>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ minWidth: 50 }}>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ minWidth: 50 }}>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ minWidth: 50 }}>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ minWidth: 50 }}>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ minWidth: 50 }}>
                <Card variant="outlined">{card}</Card>
              </Box>
            </Grid>

          </Grid>

        </Container>
      </div>
    </Paper>
  );
}
