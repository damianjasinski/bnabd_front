import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/UserNavbar";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Container, Paper, TextField } from "@mui/material";
import DrawerMenu from "./DrawerMenu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AuthCheck from "./AuthCheck";

const axios = require("axios").default;

const backgroundStyle = {
  paperContainer: {
    borderRadius: "0",
    minHeight: "100vh",
  },
};

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const Profile = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthCheck></AuthCheck>
      <Paper style={backgroundStyle.paperContainer}>
        <DrawerMenu></DrawerMenu>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "80vh",
          }}
        >
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
            }}
          >
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                "& .MuiTextField-root": { m: 2, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            ></Box>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default Profile;
