import React, { useState } from "react";
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
import { Navigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Footer from "./Footer";
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
  color: #e87800;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 16px;
  background-color: #dcdcdc;
  &:hover {
    background-color: #2f2f31;
  }
  &:focus {
    background-color: #e87800;
  }
`;

export default function Register() {
  const [response, setResponse] = useState([]);
  const [inputs, setInputs] = useState({
    firstname: "",
    surname: "",
    email: "",
    password: "",
    password2: "",
  });
  const [firstNameError, setfirstNameError] = useState(false);
  const [surnameError, setsurnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [retryPasswordError, setRetryPasswordError] = useState(false);

  const signupRequest = () => {
    const user = {
      firstname: inputs.firstname,
      surname: inputs.surname,
      email: inputs.email,
      password: inputs.password,
      password2: inputs.password2,
    };
    const data = axios
      .post("http://localhost:8080/api/login/signup", user)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
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

    if (inputs.firstname === "") {
      setfirstNameError(true);
    } else {
      setfirstNameError(false);
    }

    if (inputs.surname === "") {
      setsurnameError(true);
    } else {
      setsurnameError(false);
    }

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

    if (inputs.password2 === "") {
      setRetryPasswordError(true);
    } else {
      setRetryPasswordError(false);
    }
    if (
      firstNameError === false &&
      surnameError === false &&
      emailError === false &&
      passwordError === false &&
      retryPasswordError === false
    ) {
      signupRequest();
    }
  };

  //check if user is logged in
  if (sessionStorage.getItem("jwt")) {
    return <Navigate to="/redirect" />;
  }

  return (
    <ThemeProvider theme={theme}>
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
              spacing={0}
              style={{ minHeight: "100vh" }}
              item
              md={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "white",
              }}
              container
            >
              <Box
                sx={{
                  mx: "auto",
                }}
              >
                <Typography variant="h2" component="h2" color="black" sx={{}}>
                  Zarejestruj się
                </Typography>
              </Box>

              <Box
                sx={{
                  color: "text.secondary",
                  mx: "auto",
                }}
              >
                <form noValidate onSubmit={handleSubmit}>
                  <Box sx={{ mx: 5, p: 6 }}>
                    <Box>
                      <TextField
                        onChange={handleChange}
                        label="Imię"
                        variant="outlined"
                        color="warning"
                        fullWidth
                        name="firstname"
                        required
                        InputProps={{ style: { fontSize: 18 } }}
                        InputLabelProps={{ style: { fontSize: 18 } }}
                        error={firstNameError}
                        sx={{ width: "30vh" }}
                      />
                    </Box>
                    <Box sx={{ my: 3 }}>
                      <TextField
                        sx={{ width: "30vh" }}
                        onChange={handleChange}
                        label="Nazwisko"
                        variant="outlined"
                        color="warning"
                        fullWidth
                        name="surname"
                        required
                        InputProps={{ style: { fontSize: 18 } }}
                        InputLabelProps={{ style: { fontSize: 18 } }}
                        error={surnameError}
                      />
                    </Box>

                    <Box sx={{ my: 3 }}>
                      <TextField
                        sx={{ width: "30vh" }}
                        onChange={handleChange}
                        label="e-mail"
                        variant="outlined"
                        color="warning"
                        fullWidth
                        name="email"
                        required
                        InputProps={{ style: { fontSize: 18 } }}
                        InputLabelProps={{ style: { fontSize: 18 } }}
                        error={emailError}
                      />
                    </Box>

                    <Box sx={{ my: 3 }}>
                      <TextField
                        sx={{ width: "30vh" }}
                        onChange={handleChange}
                        label="Hasło"
                        variant="outlined"
                        color="warning"
                        fullWidth
                        name="password"
                        required
                        type="password"
                        InputProps={{ style: { fontSize: 18 } }}
                        InputLabelProps={{ style: { fontSize: 18 } }}
                        error={passwordError}
                      />
                    </Box>
                    <Box sx={{ my: 3 }}>
                      <TextField
                        sx={{ width: "30vh" }}
                        onChange={handleChange}
                        label="Powtórz hasło"
                        variant="outlined"
                        color="warning"
                        fullWidth
                        name="password2"
                        type="password"
                        InputProps={{ style: { fontSize: 18 } }}
                        InputLabelProps={{ style: { fontSize: 18 } }}
                        required
                        error={retryPasswordError}
                      />
                    </Box>
                    <StyledButton onClick={handleSubmit}>Submit</StyledButton>
                    <Link
                      href="/login"
                      underline="always"
                      variant="overline"
                      sx={{ mx: 2, color: "#e87800", fontWeight: "bold" }}
                    >
                      Masz już konto? Zaloguj się!
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
