import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Route, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

const pages = ["Seanse", "O nas"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    if (event.target.name === "Seanse") {
      navigate("/redirect");
      console.log("XD");
    }
    if (event.target.name === "O nas") {
      navigate("/aboutus");
      console.log("XD");
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1C1D1D" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalMoviesIcon
            fontSize="large"
            sx={{
              display: { xs: "none", md: "flex", color: "#e87800" },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DCinema
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} name={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ m: 5 }} textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalMoviesIcon
            sx={{
              display: { xs: "flex", md: "none", color: "#e87800" },
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DCinema
          </Typography>
          <Box
            sx={{ flexGrow: 1, ml: 15, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                size="medium"
                name={page}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1,
                  ml: 3,
                  display: "block",
                  letterSpacing: ".1rem",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#e87800",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Button
            href="/login"
            color="inherit"
            size="large"
            variant="outlined"
            sx={{
              borderColor: "#e87800",
              color: "#e87800",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
          <Button
            href="/register"
            color="inherit"
            size="large"
            variant="outlined"
            sx={{
              borderColor: "#e87800",
              color: "#e87800",
              ml: 3,
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Rejestracja
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
