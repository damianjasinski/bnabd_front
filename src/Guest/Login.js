import React, { useEffect, useState } from "react";
import { Link, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../Navbar/GuestNavbar";
import logo from "../Resource/cinema-09.jpg";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import { notifyError, notifySucc } from "../Util/Toasts";
import ToastEmitter from "../Util/ToastEmitter";

const axios = require("axios").default;

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const backgroundStyle = {
  paperContainer: {
    backgroundImage: `url(${logo})`,
    borderRadius: "0",
  },
};

const StyledButton = styled(Button)`
  color: #e87800;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 16px;
  background-color: #dcdcdc;
  &:hover {
    background-color: #2f2f31;
  }
`;

export default function Login() {
  const [response, setResponse] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [logged, setLoggedIn] = useState();

  const loginRequest = () => {
    const user = { email: inputs.email, password: inputs.password };
    const data = axios
      .post("http://localhost:8080/api/login/signin", user)
      .then(function (response) {
        sessionStorage.setItem("jwt", response.data.jwt);
        sessionStorage.setItem("role", response.data.role);
        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("id", response.data.id);
        setLoggedIn(true);
      })
      .catch(function (error) {
        notifyError("Niepoprawne dane logowania");
        console.log(error.response.data);
      });
    setResponse(data.data);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (inputs.password === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (emailError == false && passwordError == false) {
      loginRequest();
    }
  };

  //check if user is logged in
  if (sessionStorage.getItem("jwt")) {
    return <Navigate to="/redirect" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastEmitter></ToastEmitter>
      <Navbar />
      <Paper
        style={backgroundStyle.paperContainer}
        sx={{ backgroundSize: "auto" }}
      >
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item md={7} sx={{}}>
              <Box
                sx={{
                  color: "text.secondary",
                }}
              ></Box>
            </Grid>

            <Grid
              item
              container
              style={{ minHeight: "100vh" }}
              md={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "white",
              }}
            >
              <Box
                sx={{
                  mx: "auto",
                }}
              >
                <Typography variant="h2" component="h2" color="black">
                  Zaloguj się
                </Typography>
              </Box>

              <Box
                sx={{
                  color: "text.secondary",
                }}
              >
                <form noValidate onSubmit={handleSubmit}>
                  <Box sx={{ mx: 5, p: 6 }}>
                    <Box>
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
                        helperText={
                          passwordError ? "Źle wprowadzone hasło" : ""
                        }
                        sx={{ width: "30vh" }}
                      />
                    </Box>
                    <StyledButton onClick={handleSubmit}>Submit</StyledButton>
                    <Link
                      href="/register"
                      underline="always"
                      variant="overline"
                      sx={{ mx: 2, color: "#e87800", fontWeight: "bold" }}
                    >
                      Nie masz konta? Zarejestruj się!
                    </Link>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Footer></Footer>
    </ThemeProvider>
  );
}
