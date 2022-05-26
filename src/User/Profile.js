import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Container, Paper, Stack, TextField } from "@mui/material";
const axios = require("axios").default;

const backgroundStyle = {
  paperContainer: {
    backgroundColor: `black`,
    borderRadius: "0",
    minHeight: "100vh",
  },
};
const Profile = () => {
  const [inputs, setInputs] = React.useState({});
  const [firstnameError, setFirstnameError] = React.useState(false);
  const [surnameError, setSurnameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [anyChange, setAnyChange] = React.useState(false);
  const token = sessionStorage.getItem("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    const data = axios
      .get("http://localhost:8080/api/user/get/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        sessionStorage.setItem("user", JSON.stringify(response.user));
        for (const [key, value] of Object.entries(response.data)) {
          setInputs((values) => ({ ...values, [key]: value }));
          console.log(key, value);
        }
        setLoading(false);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [loading]);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const sendRequest = () => {
    if (validateInputs()) {
      const updateData = {
        newEmail: inputs.email,
        oldPassword: inputs.password,
        newPassword: inputs.password2,
      };
      const data = axios
        .post("http://localhost:8080/api/user/update", updateData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          sessionStorage.clear();
          navigate("/login");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const validateInputs = () => {
    if (anyChange == false) {
      console.log("xd");
      return false;
    }

    if (inputs.userFirstname.length < 2) {
      setFirstnameError(true);
      return false;
    }
    if (inputs.userSurname.length < 3) {
      setSurnameError(true);
      return false;
    }

    if (inputs.password !== inputs.password2 || inputs.password.length < 8) {
      setPasswordError(true);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setAnyChange(true);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Paper style={backgroundStyle.paperContainer}>
      <Navbar />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: 4,
          minHeight: "80vh",
          backgroundColor: "#0d0d0d",
        }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", mb: 6, color: "white" }}
        >
          {" "}
          Twoje dane
        </Typography>

        <Box
          sx={{
            backgroundColor: "#303131",
            minHeight: "60vh",
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
          >
            <div>
              <TextField
                color="warning"
                error={firstnameError}
                placeholder={inputs.userFirstname}
                id="userFirstname"
                name="userFirstname"
                label={inputs.userFirstname}
                helperText="Imie"
                onChange={handleChange}
              />
              <TextField
                color="warning"
                error={surnameError}
                placeholder={inputs.userSurname}
                id="userSurname"
                name="userSurname"
                label={inputs.userSurname}
                helperText="Nazwisko"
                onChange={handleChange}
              />
            </div>

            <div>
              <TextField
                color="warning"
                error={passwordError}
                id="password"
                name="password"
                helperText="password"
                onChange={handleChange}
              />
              <TextField
                color="warning"
                error={passwordError}
                id="password2"
                name="password2"
                helperText="Re-try password"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                color="warning"
                error={emailError}
                placeholder={inputs.email}
                id="email"
                name="email"
                label={inputs.email}
                helperText="email"
                onChange={handleChange}
              />
            </div>
            <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
              <Button
                variant="outlined"
                color="warning"
                size="large"
                onClick={refreshPage}
                sx={{ color: "#e87800", fontWeight: "bold" }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  color: "black",
                  backgroundColor: "#e87800",
                  fontWeight: "bold",
                }}
                onClick={sendRequest}
                endIcon={<SendIcon />}
              >
                Zaktualizuj
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Profile;
