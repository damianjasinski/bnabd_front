import React from "react";
import { BottomNavigation } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";

const theme = createTheme({
  palette: {
    type: "darkTheme",
  },
});

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="#7d664c"
      sx={{
        mx: "auto",
        fontWeight: "bold",
        pt : 1
      }}
    >
      {"Copyright © "}
      Dostarczamy filmy, które zapewnią Ci relaks i odprężenie. DCinema{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (

      <Box
        component="footer"
        sx={{
          display: "flex",
          position: "fixed",
          textAlign:"center",
          width:"100%",
          bottom: 0,
          px: 2,

          backgroundColor: "#1C1D1D",
          color: "#e87800",
        }}
      >
        <Copyright />
      </Box>

  );
};

export default Footer;
