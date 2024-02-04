import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <section id="about">
      <Box boxSizing={"inherit"} bgcolor={"white"}>
        <Stack>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            p={10}
            spacing={3}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold",borderBottom: "3px solid #AF69EE" }}>
              ABOUT ME
            </Typography>
            <Stack alignItems={"center"}>
              <Typography variant="h6" sx={{ color: "grey" }}>
                Here you will find more information about me, what I do, and my
                current skills mostly in terms
              </Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                of programming and technology
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={{ sm: "row", xs: "column", md: "row" }}
            p={5}
            spacing={10}
          >
            <Box
              sx={{
                width: { xs: "80vw", sm: "50vw" },
                bgcolor: "#AF69EE",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
              }}
            >
              <Stack p={3}>
                <Typography
                  variant="h5"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Get to know me!
                </Typography>
                <Stack p={3} pl={0} boxSizing={"inherit"}>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    I am a third year student of MNIT jaipur I'm a FullStack Web
                    Developer building Websites and Web Applications that leads
                    to the success of the overall product. Check out some of my
                    work in the Projects section. I also like doing competitive
                    programming for fun, You can checkout my leetcod and
                    codeforces account from the sidebar given in left or from
                    social section below this page. Feel free to Connect or
                    Follow me on my Linkedin where I post useful content related
                    to Web Development and Programming I'm open to Job
                    opportunities where I can contribute, learn and grow. If you
                    have a good opportunity that matches my skills and
                    experience then don't hesitate to contact me.
                  </Typography>
                </Stack>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector("#contact").offsetTop,
                      behavior: "smooth",
                    });
                  }}
                  variant="contained"
                  size="large"
                  sx={{
                    color: "#AF69EE",
                    bgcolor: "white",
                    width: "300px",
                    ":hover": {
                      bgcolor: "#b09cc8",
                      color: "white",
                    },
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>CONTACT</Typography>
                </Button>
              </Stack>
            </Box>

            <Box
              sx={{
                bgcolor: "#AF69EE",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                boxSizing: "inherit",
              }}
            >
              <Stack p={3}>
                <Typography
                  variant="h5"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  My Skills
                </Typography>
                <Stack pt={3} spacing={4}>
                  <Stack direction={"row"} spacing={3}>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        HTML
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        CSS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        JAVASCRIPT
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        REACT JS
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction={"row"} spacing={3}>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        GITHUB
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        DATA STRUCTURES
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        ALGORITHMS
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction={"row"} spacing={3}>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        BOOTSTRAP
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        MATERIAL UI
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        NPM
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction={"row"} spacing={3}>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        NODE JS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        GIT
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        EXPRESS JS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        MONGO DB
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction={"row"} spacing={3}>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        MONGOOSE
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        boxsizing: "inherit",
                        bgcolor: "white",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        borderRadius: "10px",
                      }}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Typography
                        p={1}
                        sx={{ fontWeight: "bold", color: "#AF69EE" }}
                      >
                        FIREBASE
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </section>
  );
};

export default About;
