import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projectItemStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
  };
  return (
    <section id="projects">
      <Box boxSizing="border-box" bgcolor="white" p={{ xs: 2, md: 5 }}>
        <Stack spacing={3} alignItems={"center"}>
          <Stack alignItems={"center"}>
            <Typography variant="h4" sx={{ fontWeight: "bold",borderBottom: "3px solid #AF69EE" }}>
              PROJECTS
            </Typography>
          </Stack>
          <Stack alignItems={"center"}>
            <Typography variant="h6" sx={{ color: "grey" }}>
              Here you will find some of the personal projects on wev development that 
            </Typography>
            <Typography variant="h6" sx={{ color: "grey" }}>I created along with their live deployed link and github repository link</Typography>
          </Stack>
          <Stack spacing={5}>
          <Stack
                
              direction={{ xs: "column", sm: "row" }}
              boxSizing="border-box"
              alignItems={"center"}
            >
              <img
              style={projectItemStyle}
                src={require("C:/Users/pranjal/reportfolio/my-app/src/assets/mediamodifier_image (1).png")}
                alt="first_mg"
                height={{ xs: "auto", sm: "500px" }}
                width="50%"
              />
              <Stack pt={{ xs: 3, sm: 5 }} px={{ xs: 0, sm: 5 }} >
                <Typography variant="h4" sx={{ fontWeight: "bold",borderBottom: "3px solid #AF69EE" }}>
                  Portfolio
                </Typography>
                <Stack pt={2}>
                  <Typography variant="h6" sx={{ color: "grey" }}>
                    It is a beautiful frontend project based on REACT JS and Material UI, It's design is its key point with its responsive behavior and fluid designing.
                  </Typography>
                </Stack>
                <Stack direction="row" pt={3} spacing={2}>
                  <Button
                    href="https://code-prsh.github.io/pranjal/"
                    variant="contained"
                    size="medium"
                    sx={{
                      color: "white",
                      bgcolor: "#AF69EE",
                      ":hover": {
                        bgcolor: "#b09cc8",
                        color: "white",
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      LIVE DEMO
                    </Typography>
                  </Button>
                  <Button
                    href="https://github.com/code-prsh/pranjal"
                    variant="contained"
                    size="medium"
                    sx={{
                      color: "white",
                      bgcolor: "#AF69EE",
                      ":hover": {
                        bgcolor: "#b09cc8",
                        color: "white",
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>GITHUB</Typography>
                  </Button>
                </Stack>
              </Stack>
            </Stack>

            {/* Project 1 */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              boxSizing="border-box"
              alignItems={"center"}
            >
              <img
                src={require("C:/Users/pranjal/reportfolio/my-app/src/assets/mediamodifier_image.png")}
                alt="first_mg"
                height={{ xs: "auto", sm: "500px" }}
                width="50%"
              />
              <Stack pt={{ xs: 3, sm: 5 }} px={{ xs: 0, sm: 5 }} >
                <Typography variant="h4" sx={{ fontWeight: "bold",borderBottom: "3px solid #AF69EE" }}>
                  Bluetube
                </Typography>
                <Stack pt={2}>
                  <Typography variant="h6" sx={{ color: "grey" }}>
                    It is an innovative YouTube clone made by using React Js framework and Material UI is used for its interface design. Fetching of data is done by using YouTube v3 API based on Rapid API.
                  </Typography>
                </Stack>
                <Stack direction="row" pt={3} spacing={2}>
                  <Button
                    href="https://vocal-lamington-f94f88.netlify.app/"
                    variant="contained"
                    size="medium"
                    sx={{
                      color: "white",
                      bgcolor: "#AF69EE",
                      ":hover": {
                        bgcolor: "#b09cc8",
                        color: "white",
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      LIVE DEMO
                    </Typography>
                  </Button>
                  <Button
                    href="https://github.com/code-prsh/youtube-clone"
                    variant="contained"
                    size="medium"
                    sx={{
                      color: "white",
                      bgcolor: "#AF69EE",
                      ":hover": {
                        bgcolor: "#b09cc8",
                        color: "white",
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>GITHUB</Typography>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            
            {/* Project 2 */}
            
            {/* Project 3 */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              boxSizing="border-box"
              alignItems={"center"}
            >
              <img
                src={require("C:/Users/pranjal/reportfolio/my-app/src/assets/mediamodifier_image (2).png")}
                alt="first_mg"
                height={{ xs: "auto", sm: "500px" }}
                width="50%"
              />
              <Stack pt={{ xs: 3, sm: 5 }} px={{ xs: 0, sm: 5 }} >
                <Typography variant="h4" sx={{ fontWeight: "bold",borderBottom: "3px solid #AF69EE" }}>
                  Ethnixx
                </Typography>
                <Stack pt={2}>
                  <Typography variant="h6" sx={{ color: "grey" }}>
                    It is a FULL STACK project which enhanced my development skills to a greater extent. I have used React for its frontend, MongoDB for its database, and Node Js with the Express framework in its backend. It is the display of my full stack development skills.
                  </Typography>
                </Stack>
                <Stack direction="row" pt={3} spacing={2}>
                  <Button
                    href="https://ethnixx.onrender.com/"
                    variant="contained"
                    size="medium"
                    sx={{
                      color: "white",
                      bgcolor: "#AF69EE",
                      ":hover": {
                        bgcolor: "#b09cc8",
                        color: "white",
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      LIVE DEMO
                    </Typography>
                  </Button>
                  <Button
                    href="https://github.com/code-prsh/Ethnixx"
                    variant="contained"
                    size="medium"
                    sx={{
                      color: "white",
                      bgcolor: "#AF69EE",
                      ":hover": {
                        bgcolor: "#b09cc8",
                        color: "white",
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>GITHUB</Typography>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </section>
  );
};

export default Projects;
