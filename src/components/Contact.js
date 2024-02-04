import { Box, Button, Stack, Typography } from "@mui/material";

import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_doyybld",
      "template_0s2q09n",
      form.current,
      "73_YD_D5ELkvxXryS"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <Box boxSizing={"inherit"}>
        <Box
          boxSizing={"inherit"}
          sx={{
            boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
            borderRadius: "10px",
            bgcolor: "#AF69EE",
          }}
          m={{sm: "55px", xs: "15px"}}
          mt={{xs: "20px"}}
        >
          <Stack alignItems={"center"} p={3}>
            <Stack>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                CONTACT
              </Typography>
            </Stack>
            <Stack alignItems={"center"} p={4}>
              <Typography variant="h6" sx={{ color: "whitesmoke" }}>
                Feel free to Contact me by submitting the form below and
              </Typography>
              <Typography variant="h6" sx={{ color: "whitesmoke" }}>
                {" "}
                I will get back to you as soon as possible
              </Typography>
            </Stack>
          </Stack>
          <form ref={form} onSubmit={sendEmail}>
            <Stack direction={"column"} spacing={3} p={15} pt={3}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                style={{
                  border: "1px solid #AF69EE",
                  height: "50px",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                  fontSize: "20px",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={{
                  border: "1px solid #AF69EE",
                  height: "50px",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                  fontSize: "20px",
                }}
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
                style={{
                  border: "1px solid #AF69EE",
                  height: "200px",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                  fontSize: "20px",
                }}
              ></textarea>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#b09cc8",
                  color: " white",
                  boxSizing: "inherit",
                  ":hover": {
                    bgcolor: "#967bb6",
                    color: "white",
                  },
                }}
              >
                <Typography sx={{ fontWeight: "bold" }} pt={2} pb={2}>
                  SEND MESSAGE
                </Typography>
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
