import * as React from "react";
import SeancesTableGrid from "./SeancesTableGrid";
import Container from "@mui/material/Container";
import DrawerMenu from "./DrawerMenu";
import { Box } from "@mui/system";
const axios = require("axios").default;

export default function StickyHeadTable(props) {
  const [seances, setSeances] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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
        <SeancesTableGrid seances = {seances}></SeancesTableGrid>
      </Box>
    </Container>
  );
}
