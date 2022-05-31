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

const AddSeance = () => {
  const dateRegex =
    /^[0-3]{1}[0-9]{1}\/[0-1]{1}[0-9]{1}\/[0-9]{4}\s{1}[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}$/;

  const token = sessionStorage.getItem("jwt");
  const [inputs, setInputs] = React.useState({});
  const [anyChange, setAnyChange] = React.useState(false);
  const [titles, setTitles] = React.useState([{}]);
  const [loading, setLoading] = React.useState(true);

  const [selectedTitleError, setSelectedTitleError] = React.useState(false);
  const [seanseDateError, setSeanseDateError] = React.useState(false);
  const [roomIdError, setRoomIdError] = React.useState(false);
  const [advTimeError, setAdvTimeError] = React.useState(false);

  const [selectedTitle, setSelectedTitle] = React.useState({});

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

  const onTitleSelect = (event, value) => {
    setSelectedTitle(value);
  };

  const validateInputs = () => {
    if (anyChange == false) {
      return false;
    }

    if (!selectedTitle) {
      setSelectedTitleError(true);
      return false;
    }
    if (!dateRegex.test(inputs.seanceDate)) {
      console.log("Regex");
      setSeanseDateError(true);
      return false;
    }

    if (!inputs.roomId) {
      setRoomIdError(true);
      return false;
    }

    if (!inputs.advertisementTime) {
      setAdvTimeError(true);
      return false;
    }
    //TODO napisac request z add seance
    sendRequest();
    return true;
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const sendRequest = () => {
    const seance = {
      advertisementTime: inputs.advertisementTime,
      seanceDate: inputs.seanceDate,
      roomId: inputs.roomId,
      titles: { id: selectedTitle.id },
    };
    axios
      .post("http://localhost:8080/api/seance/add", seance, {
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
            <Autocomplete
              disablePortal
              onChange={onTitleSelect}
              id="title"
              variant="filled"
              options={titles}
              sx={{ width: "30ch" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tytuł filmu"
                  variant="filled"
                  color="warning"
                />
              )}
            />

            <TextField
              color="warning"
              variant="filled"
              error={seanseDateError}
              // placeholder={inputs.userSurname}
              id="seanceDate"
              name="seanceDate"
              label="Data seansu"
              helperText="Data seansu"
              onChange={handleChange}
            />
          </div>

          <div>
            <TextField
              color="warning"
              variant="filled"
              error={roomIdError}
              id="roomId"
              label="Numer sali"
              name="roomId"
              helperText="Numer sali"
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              color="warning"
              variant="filled"
              error={advTimeError}
              id="advertisementTime"
              label="Czas reklam"
              name="advertisementTime"
              helperText="Czas reklam"
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

export default AddSeance;
