import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const naviagte = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projectItemStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    transition: "opacity 2s ease-out, transform 2s ease-out",
  };
  return (
    <section id="home">
      <Box
        boxSizing={"inherit"}
        sx={{
          display: "flex",
          backgroundImage: `url("https://img.freepik.com/premium-photo/purple-background-graphic-modern-texture-blur-abstract-digital-design-backgrounds_97567-1325.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          boxSizing={"inherit"}
           bgcolor={"black"}
          sx={{
            ml: "0",
            mt: "200px",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            // backdropFilter: "blur(10px)"
          }}
          alignItems={"center"}
        >
          <a href="https://www.linkedin.com/in/pranjal-sharma-199a25227/">
            <IconButton>
              <LinkedinLogo size={32} color="white" weight="fill" />
            </IconButton>
          </a>
          <a href="https://www.github.com/code-prsh/">
            <IconButton>
              <GithubLogo size={32} color="white" weight="fill" />
            </IconButton>
          </a>
          <a href="https://codeforces.com/profile/Regnum_Potentissimus">
            <IconButton>
              <img
                style={{ width: "30px", height: "30px", color: "white" }}
                src="https://codeforces.com/predownloaded/44/8e/448e0c084661140997003a03e6afd47e515e3ab5.png"
              ></img>
            </IconButton>
          </a>
          <a href="https://leetcode.com/pra_njal/">
            <IconButton>
              <img
                style={{ width: "30px", height: "30px", color: "white" }}
                src="data:image/png;base64,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"
              ></img>
            </IconButton>
          </a>
        </Box>

        <Stack
          p={{ sm: 15, xs: 10 }}
          pl={{ sm: 37, xs: 10 }}
          alignItems={"center"}
          spacing={3}
          boxSizing={"inherit"}
          mt={{xs: 20}}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }} style={projectItemStyle}>
            HI I'M PRANJAL SHARMA
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }} style={projectItemStyle}> 
            A Full Stack Developer Which Developes Projects Based On Mern stack
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }} style={projectItemStyle}>
            And solving the real world problems through my skills
          </Typography>
          <Stack p={5} style={projectItemStyle}>
          <a href="https://drive.google.com/file/d/1647zT95KaXXWcoHmVrWjNXuua-MmknLi/view?usp=drive_link">

          <Button
              // onClick={(e) => {
              //   e.preventDefault();
              //   window.scrollTo({
              //     top: document.querySelector("#projects").offsetTop,
              //     behavior: "smooth",
              //   });
              // }}
              
              variant="contained"
              size="large"
              sx={{
                width: "300px",
                backgroundColor: "#AF69EE",
                ":hover": {
                  bgcolor: "#b09cc8",
                  color: "white",
                },
              }}
            >
              Download CV
            </Button>

          </a>
            
          </Stack>
        </Stack>
      </Box>
    </section>
  );
};

export default Home;
