import React, { useState } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
import Footer from "./Footer";

const theme = createTheme({
  palette: {
    type: "dark",
  },

});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,

}));

export default function Register() {
  const [firstName, setfirstName] = useState("");
  const [firstNameError, setfirstNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [retryPassword, setRetryPassword] = useState("");
  const [retryPasswordError, setRetryPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName === "") {
      setfirstNameError(true);
    } else {
      setfirstNameError(false);
    }

    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (password === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (retryPassword === "") {
      setRetryPasswordError(true);
    } else {
      setRetryPasswordError(false);
    }

    console.log(firstName);
    console.log(email);
    console.log(password);
    console.log(retryPassword);
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx = {{height:"100%"}}>
        <Grid container spacing={2}>
          <Grid item lg={8}>
            <Box
              sx={{
                color: "text.secondary",

                m: 3,
              }}
            >
              <Item>xs=8</Item>
            </Box>
          </Grid>

          <Grid item lg={4}>
            <Box
              sx={{
                color: "text.secondary",
                m: 3,
              }}
            >
              <form noValidate onSubmit={handleSubmit}>
                <Box sx={{ my: 3 }}>
                  <TextField
                    onChange={(e) => setfirstName(e.target.value)}
                    label="Imię"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={firstNameError}
                  />
                </Box>
                <Box sx={{ my: 3 }}>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    label="e-mail"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={emailError}
                  />
                </Box>

                <Box sx={{ my: 3 }}>
                  <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    label="Hasło"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={passwordError}
                  />
                </Box>
                <Box sx={{ my: 3 }}>
                  <TextField
                    onChange={(e) => setRetryPassword(e.target.value)}
                    label="Powtórz hasło"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={retryPasswordError}
                  />
                </Box>

                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  endIcon={<LoginIcon />}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    
    </ThemeProvider>
  );
}
