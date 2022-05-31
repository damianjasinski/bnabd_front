import * as React from "react";
import UsersTableGrid from "./UsersTableGrid";
import Container from "@mui/material/Container";
import DrawerMenu from "./DrawerMenu";
import { Box } from "@mui/system";
import DialogConfirm from "./DialogConfirm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const axios = require("axios").default;
const theme = createTheme({
  palette: {
    type: "light",
  },
});
export default function StickyHeadTable(props) {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    const data = axios
      .get("http://localhost:8080/api/user/get/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [loading]);
  console.log(users);



  const deleteSeanceRequest = (id) => {
    const token = sessionStorage.getItem("jwt");
    axios
      .delete("http://localhost:8080/api/seance/delete/" + id, {
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
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
        <DrawerMenu></DrawerMenu>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "90vh",
            mt:10
          }}
        >
         <UsersTableGrid users = {users}></UsersTableGrid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
