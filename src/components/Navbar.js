import React, { useState } from "react";
import {
  Avatar,
  Box,
  Stack,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleNavLinkClick = (targetId) => {
    setActiveNav(targetId);
    window.scrollTo({
      top: document.querySelector(targetId).offsetTop,
      behavior: "smooth",
    });
    setDrawerOpen(false); // Close the drawer on mobile after clicking a link
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Box
        width={"100%"}
        height={"65px"}
        sx={{
          position: "fixed",
          // boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
          zIndex: 2,
          backdropFilter: "blur(10px)"
        }}
        // bgcolor={"#AF69EE"}
        
      >
        <Stack
          direction={"row"}
          justifyContent={{sm: "space-between", xs: "space-around"}}
          alignItems={"center"}
        >
          <Stack
            direction={"row" }
            // p={{ xs: 2, sm: 3 }}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            pl={{ xs: 0, sm: 5 }}
          >
            <Avatar
              src={
                "https://media.licdn.com/dms/image/D4D03AQEUu-x7Yl0KDA/profile-displayphoto-shrink_800_800/0/1679761634618?e=1711584000&v=beta&t=S3eXWRvxTBM1_rC7-3bX5HqxNTs0ThK2HeI3If-jB0o"
              }
              // sx={{height: "50px", width: "50px"}}
            />
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#373737", mt: { xs: 1, sm: 0 } }}
            >
              PRANJAL SHARMA
            </Typography>
          </Stack>
          <Stack direction={"row"} p={{ xs: 2, sm: 3 }} pr={{ xs: 0, sm: 7 }} spacing={7}>
            {/* Hamburger menu icon for small devices */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{ display: { xs: "flex", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* Regular navigation links for larger devices */}
            <Typography
              onClick={() => handleNavLinkClick("#home")}
              variant="body2"
              sx={{
                fontWeight: "bold",
                color: "#373737",
                cursor: "pointer",
                position: "relative", // Set position to relative
    overflow: "hidden", // Hide overflow for the pseudo-element
    display: "inline-block", // Ensure pseudo-element is positioned correctly
    textDecorationColor: "grey",
    display: { xs: "none", sm: "flex" },
    '&:before': {
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: 0,
      width: 0,
      height: "3px",
      backgroundColor: "#AF69EE",
      transition: "width 0.3s ease-in-out, left 0.3s ease-in-out", // Add transition properties
      transform: "translateX(-50%) translate(+50%)", // Center the pseudo-element
    },
    '&:hover:before': {
      width: "100%",
      left: 0,
    },
              }}
            >
              HOME
            </Typography>
            {/* ... (other navigation links) */}
            <Typography
              onClick={() => handleNavLinkClick("#about")}
              variant="body2"
              sx={{
                fontWeight: "bold",
                color: "#373737",
                cursor: "pointer",
                position: "relative", // Set position to relative
    overflow: "hidden", // Hide overflow for the pseudo-element
    display: "inline-block", // Ensure pseudo-element is positioned correctly
    textDecorationColor: "grey",
    display: { xs: "none", sm: "flex" },
    '&:before': {
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: 0,
      width: 0,
      height: "3px",
      backgroundColor: "#AF69EE",
      transition: "width 0.3s ease-in-out, left 0.3s ease-in-out", // Add transition properties
      transform: "translateX(-50%) translate(+50%)", // Center the pseudo-element
    },
    '&:hover:before': {
      width: "100%",
      left: 0,
    },
              }}
            >
              ABOUT
            </Typography>
            <Typography
              onClick={() => handleNavLinkClick("#projects")}
              variant="body2"
              sx={{
    fontWeight: "bold",
    color: "#373737",
    cursor: "pointer",
    position: "relative", // Set position to relative
    overflow: "hidden", // Hide overflow for the pseudo-element
    display: "inline-block", // Ensure pseudo-element is positioned correctly
    textDecorationColor: "grey",
    display: { xs: "none", sm: "flex" },
    '&:before': {
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: 0,
      width: 0,
      height: "3px",
      backgroundColor: "#AF69EE",
      transition: "width 0.3s ease-in-out, left 0.3s ease-in-out", // Add transition properties
      transform: "translateX(-50%) translate(+50%)", // Center the pseudo-element
    },
    '&:hover:before': {
      width: "100%",
      left: 0,
    },
  }}
            >
              PROJECTS
            </Typography>
            <Typography
              onClick={() => handleNavLinkClick("#contact")}
              variant="body2"
              sx={{
                fontWeight: "bold",
                color: "#373737",
                cursor: "pointer",
                position: "relative", // Set position to relative
    overflow: "hidden", // Hide overflow for the pseudo-element
    display: "inline-block", // Ensure pseudo-element is positioned correctly
    textDecorationColor: "grey",
    display: { xs: "none", sm: "flex" },
    '&:before': {
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: 0,
      width: 0,
      height: "3px",
      backgroundColor: "#AF69EE",
      transition: "width 0.3s ease-in-out, left 0.3s ease-in-out", // Add transition properties
      transform: "translateX(-50%) translate(+50%)", // Center the pseudo-element
    },
    '&:hover:before': {
      width: "100%",
      left: 0,
    },
              }}
            >
              CONTACT
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* Drawer for small devices */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <List>
          {["#home", "#about", "#projects", "#contact"].map((targetId, index) => (
            <ListItem button key={index} onClick={() => handleNavLinkClick(targetId)}>
              <ListItemText primary={targetId === "#" ? "HOME" : targetId.substring(1).toUpperCase()} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;

