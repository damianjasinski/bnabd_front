import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
import Footer from './Footer';
import logo from "../Resource/cinema-09.jpg";
import leftImage from "../Resource/aboutus1.jpg";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const theme = createTheme({
    palette: {
      type: "darkTheme",
    },
  });
  
  const backgroundStyle = {
    paperContainer: {
      backgroundImage: `url(${logo})`,
      borderRadius: "0",
    },
  };

  

const AboutUs = () => {
  return (
    <ThemeProvider theme={theme}>
    <Navbar />
    
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${leftImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
<Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              O nas
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non tortor sagittis, 
            aliquet tortor id, finibus libero. Ut vel odio tellus. Vestibulum dignissim tortor velit. 
            Etiam tincidunt tincidunt consequat. Praesent pharetra, purus vitae facilisis condimentum, 
            nibh elit imperdiet risus, a eleifend eros nisi non quam. In eget malesuada lacus.
             Fusce auctor ex pellentesque turpis aliquam ultricies.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      <FacebookIcon fontSize="large" />
      <LinkedInIcon fontSize="large"></LinkedInIcon>
      <InstagramIcon fontSize='large'></InstagramIcon>
      <TwitterIcon fontSize='large'></TwitterIcon>

    </Box>
            </Stack>
          </Container>
          </Box>
        </Grid>
      </Grid>
    <Footer></Footer>
    </ThemeProvider>
  )
}

export default AboutUs