import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const environments = [
    "Residential",
    "Office",
    "Factory",
    "School",
    "Hospital",
    "Shops"
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          AV k-Solutions
        </Typography>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {environments.map((env) => (
            <Button
              key={env}
              component={Link}
              to={`/services/${env.toLowerCase()}`}
              color="inherit"
            >
              {env}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {environments.map((env) => (
              <MenuItem
                key={env}
                component={Link}
                to={`/services/${env.toLowerCase()}`}
                onClick={handleMenuClose}
              >
                {env}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
