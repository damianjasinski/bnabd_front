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
import logo from "../Resource/cinema-09.jpg";

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
  background-color: black;
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

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,

// }));

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
      <Paper
        style={backgroundStyle.paperContainer}
        sx={{ backgroundSize: "auto" }}
      >
        <Box sx={{ mt: 2 }}>
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
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  color: "text.secondary",
                  mx: "auto"
                }}
              >
                <form noValidate onSubmit={handleSubmit}>
                  <Box sx={{ mx: 5, p: 10 }}>
                    <Box sx={{ my: 3 }}>
                      <TextField
                        onChange={(e) => setfirstName(e.target.value)}
                        label="Imię"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        error={firstNameError}
                        sx={{ width: "30vh" }}
                      />
                    </Box>
                    <Box sx={{ my: 3 }}>
                      <TextField
                        sx={{ width: "30vh" }}
                        onChange={(e) => setEmail(e.target.value)}
                        label="e-mail"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        error={emailError}
                      />
                    </Box>

                    <Box sx={{ my: 3 }}>
                      <TextField
                        sx={{ width: "30vh" }}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Hasło"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        error={passwordError}
                      />
                    </Box>
                    <Box sx={{ my: 3 }}>
                      <TextField
                        sx={{ width: "30vh" }}
                        onChange={(e) => setRetryPassword(e.target.value)}
                        label="Powtórz hasło"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        InputProps={{ style: { fontSize: 22 } }}
                        InputLabelProps={{ style: { fontSize: 22 } }}
                        required
                        error={retryPasswordError}
                      />
                    </Box>
                    <StyledButton>Submit</StyledButton>
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
