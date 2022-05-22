import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
import logo from "../Resource/cinema-09.jpg";
import { Navigate } from "react-router-dom"
import FormHelperText from '@mui/material/FormHelperText';

const axios = require("axios").default;

const theme = createTheme({
  palette: {
    type: "darkTheme",
  },
});

const backgroundStyle = {
  paperContainer: {
    backgroundImage: `url(${logo})`,
    borderRadius: "0",
  },
};

const StyledButton = styled(Button)`
  border-style:solid;
  border-width:1.5px;
  border-radius:5px;
  color: #e87800;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 16px;
  &:hover {
    background-color: #2f2f31;
  }
  &:focus {
    background-color: gray;
  }
`;

export default function Register() {

  const [response, setResponse] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [inputs, setInputs] = useState({ "email": "", "password": "" });
  const [logged, setLoggedIn] = useState();

  const loginRequest = () => {
    const user = { email: inputs.email, password: inputs.password }
    const data = axios
      .post("http://localhost:8080/api/login/signin", user)
      .then(function (response) {
        sessionStorage.setItem("jwt", response.data.jwt)
        sessionStorage.setItem("role", response.data.role)
        sessionStorage.setItem("email", user.email)
        setLoggedIn(true)
      })
      .catch(function (error) {
        console.log(error);
      });
    setResponse(data.data);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.email === "") {
      setEmailError(true);
    }
    else {
      setEmailError(false);
    }
    if (inputs.password === "") {
      setPasswordError(true);
    }
    else {
      setPasswordError(false);
    }
    if (emailError == false && passwordError == false) {
      loginRequest();
    }
  };

  //check if user is logged in
  if (sessionStorage.getItem("jwt")) {
    return <Navigate to="/redirect" />
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Paper 
        style={backgroundStyle.paperContainer}
        sx={{ backgroundSize: "auto"  }}
      >
        <Box sx={{ mt: 2  }}>
          <Grid container spacing={2}>
            <Grid item lg={7} sx={{}}>
              <Box
                sx={{
                  color: "text.secondary",
                }}
              ></Box>
            </Grid>

            <Grid
              spacing={0}
              style={{ minHeight: "100vh" }}
              item
              lg={5}

            
              sx={{ bgcolor: "white" }}
              container
            >
              <Box
                sx={{
                  mx: "auto",
                  mt: "auto",
                }}
                >
                <Typography variant="h2" component="h2" color = "black">
                  Zaloguj się
                </Typography>
              </Box>

              <Box
                sx={{
                  color: "text.secondary",
                  mx: "auto",
                }}
              >
                <form noValidate onSubmit={handleSubmit}>
                  <Box sm = {12} sx={{ mx: 5, p: 10 }}>
                    <Box >
                      <TextField
                        
                        onChange={handleChange}
                        label="e-mail"
                        name="email"
                        variant="outlined"
                        color="warning"
                        fullWidth
                        required
                        InputProps={{ style: { fontSize: 18 } }}
                        InputLabelProps={{ style: { fontSize: 18 } }}
                        error={emailError}
                        helperText={emailError ? "Źle wprowadzony mail" : ""}
                        sx={{ width: "30vh" }}
                      />
                    </Box>

                    <Box sx={{ my: 3 }}>
                      <TextField
                      
                        onChange={handleChange}
                        label="Hasło"
                        type="password"
                        variant="outlined"
                        color="warning"
                        name="password"
                        fullWidth
                        required
                        InputProps={{ style: { fontSize: 18 } }}
                        InputLabelProps={{ style: { fontSize: 18 } }}
                        error={passwordError}
                        helperText={passwordError ? "Źle wprowadzone hasło" : ""}
                        sx={{ width: "30vh" }}
                      />

                    </Box>
                    <StyledButton onClick={handleSubmit}>Submit</StyledButton>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    
    </ThemeProvider>
  );
}
