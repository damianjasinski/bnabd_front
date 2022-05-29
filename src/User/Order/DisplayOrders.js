import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../../Navbar/UserNavbar";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import OrderGridTable from "./OrderGridTable";
import Footer from "../../Guest/Footer";
const axios = require("axios").default;

const backgroundStyle = {
  paperContainer: {
    backgroundColor: `black`,
    borderRadius: "0",
    minHeight: "100vh",
  },
};

const DisplayOrders = () => {
  const [orders, setOrders] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    const data = axios
      .get("http://localhost:8080/api/user/get/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setOrders(response.data);
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [loading]);
  console.log(orders);


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
          minHeight: "80vh",
          backgroundColor: "#0d0d0d",
        }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", mb: 4, mt: 2, color: "white" }}
        >
          {" "}
          Twoje zamówienia
        </Typography>

        <Box
          sx={{
            backgroundColor: "#303131",
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: "5px",
          }}
        >
          <OrderGridTable orders = {orders}></OrderGridTable>
        </Box>
      </Box>
      <Footer></Footer>
    </Paper>
  );
};

export default DisplayOrders;
