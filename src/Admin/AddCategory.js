import * as React from "react";
import SeancesTableGrid from "./SeancesTableGrid";
import Container from "@mui/material/Container";
import DrawerMenu from "./DrawerMenu";
import Box from "@mui/material/Box";
import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Autocomplete from "@mui/material/Autocomplete";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    type: "light",
  },
});
const axios = require("axios").default;

const AddCategory = () => {
  const dateRegex =
    /^[0-3]{1}[0-9]{1}\/[0-1]{1}[0-9]{1}\/[0-9]{4}\s{1}[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}$/;

  const token = sessionStorage.getItem("jwt");
  const [inputs, setInputs] = React.useState({});
  const [anyChange, setAnyChange] = React.useState(false);
  const [titles, setTitles] = React.useState([{}]);
  const [loading, setLoading] = React.useState(true);

  const [categoryError, setCategoryError] = React.useState(false);


  React.useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    const data = axios
      .get("http://localhost:8080/api/titles/get/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        const data = response.data.data;
        const options = [];
        data.forEach((element) => {
          options.push({ label: element.name, id: element.id });
        });
        setTitles(options);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [loading]);

  const handleChange = (event) => {
    setAnyChange(true);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };


  const validateInputs = () => {
    if (!inputs.name || inputs.name.length < 3) {
      setCategoryError(true);
      return false;
    }
    sendRequest();
    return true;
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const sendRequest = () => {
    const category = {
      name : inputs.name
    };
    axios
      .post("http://localhost:8080/api/category/add", category, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      refreshPage()
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <DrawerMenu></DrawerMenu>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "90vh",
            "& .MuiTextField-root": { m: 1, width: "30ch" },
          }}
        >
          <div>
            <TextField
              color="warning"
              variant="filled"
              error={categoryError}
              id="name"
              label="Nazwa kategorii"
              name="name"
              helperText="Wpisz nazwę kategorii"
              onChange={handleChange}
            />
          </div>
          <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
            <Button
              color="warning"
              size="large"
              variant="outlined"
              onClick={refreshPage}
              sx={{ color: "#e87800", fontWeight: "bold" }}
              startIcon={<DeleteIcon />}
            >
              Anuluj
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                color: "black",
                backgroundColor: "#e87800",
                fontWeight: "bold",
              }}
              onClick={validateInputs}
              // onClick={sendRequest}
              endIcon={<SendIcon />}
            >
              Zaktualizuj
            </Button>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AddCategory;
