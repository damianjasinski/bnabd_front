import * as React from "react";
import SeancesTableGrid from "./SeancesTableGrid";
import Container from "@mui/material/Container";
import DrawerMenu from "./DrawerMenu";
import { Box } from "@mui/system";
import DialogConfirm from "./DialogConfirm"
const axios = require("axios").default;

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
    seances.forEach(element => {
      if(element.id === id) {
        setSeanceToDelete(element)
      }
    });
    setShowModal(true)
    console.log(seanceToDelete)

  }

  const deleteSeanceRequest = (id) => {
    console.log("delete " + id)
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
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
        {showModal ? <DialogConfirm showModalSetter = {setShowModal} seance = {seanceToDelete} sendRequestHandler = {deleteSeanceRequest}></DialogConfirm> : ""}
        <SeancesTableGrid openModal = {openModal} seances = {seances}></SeancesTableGrid>
      </Box>
    </Container>
  );
}
