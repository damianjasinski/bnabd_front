import React from 'react'
import { BottomNavigation } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Navbar from "./Navbar";
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    type: "darkTheme",
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="#e87800"
    sx={
      {
        fontWeight: 'bold'
      }
    }>
      {'Copyright © '}
      Dostarczamy filmy, które zapewnią Ci relaks i odprężenie. DCinema
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
      <Box
        component="footer"
        sx={{
          px: 2,
          py: 2,
          mt: 'auto',
          backgroundColor: "#1C1D1D",
          color: "#e87800",
        }}
      >
        <Box>
        <Container maxWidth="sm">
          <Copyright />
        </Container>

        </Box>

        
      </Box>
      

  )
}

export default Footer