import * as React from "react";
import SeancesTableGrid from "./SeancesTableGrid";
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
  const [seances, setSeances] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [seanceToDelete, setSeanceToDelete] = React.useState();

  React.useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    const data = axios
      .get("http://localhost:8080/api/seance/get/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setSeances(response.data.seances);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(seances);

  const openModal = (id) => {
    seances.forEach((element) => {
      if (element.id === id) {
        setSeanceToDelete(element);
      }
    });
    setShowModal(true);
  };
  const refreshPage = () => {
    window.location.reload(false);
  };

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
        refreshPage();
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
      <Container>
        <DrawerMenu></DrawerMenu>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "90vh",
          }}
        >
          {showModal ? (
            <DialogConfirm
              showModalSetter={setShowModal}
              seance={seanceToDelete}
              sendRequestHandler={deleteSeanceRequest}
            ></DialogConfirm>
          ) : (
            ""
          )}
          <SeancesTableGrid
            openModal={openModal}
            seances={seances}
          ></SeancesTableGrid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
