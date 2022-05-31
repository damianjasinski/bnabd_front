
import * as React from "react";
import SeancesTableGrid from "./SeancesTableGrid";
import Container from "@mui/material/Container";
import DrawerMenu from "./DrawerMenu";
import Box from "@mui/material/Box";
import { Paper, Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
    palette: {
        type: "dark",
    },
});
const axios = require("axios").default;


const AddSeance = () => {

    const [inputs, setInputs] = React.useState({})
    const [anyChange, setAnyChange] = React.useState(false)

    const handleChange = (event) => {
        setAnyChange(true);
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
        console.log(inputs);
    };

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
                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                    }}
                >


                    <div>
                        <TextField

                            color="warning"
                            variant="filled"

                            // error={firstnameError}
                            // placeholder={inputs.userFirstname}
                            id="userFirstname"
                            name="userFirstname"
                            // label={inputs.userFirstname}
                            helperText="Imie"
                            onChange={handleChange}
                        />
                        <TextField

                            color="warning"
                            variant="filled"

                            // error={surnameError}
                            // placeholder={inputs.userSurname}
                            id="userSurname"
                            name="userSurname"
                            // label={inputs.userSurname}
                            helperText="Nazwisko"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <TextField

                            color="warning"
                            variant="filled"

                            // error={passwordError}
                            id="password"
                            name="password"
                            helperText="password"
                            onChange={handleChange}
                        />
                        <TextField

                            color="warning"
                            variant="filled"

                            // error={passwordError}
                            id="password2"
                            name="password2"
                            helperText="Re-try password"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <TextField

                            color="warning"
                            variant="filled"
                            // error={emailError}
                            // placeholder={inputs.email}
                            id="email"
                            name="email"
                            // label={inputs.email}
                            helperText="email"
                            onChange={handleChange}
                        />

                    </div>

                    <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
                        <Button

                            color="warning"
                            size="large"
                            variant="outlined"
                            // onClick={refreshPage}
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
}

export default AddSeance