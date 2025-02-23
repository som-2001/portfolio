import { Container, Typography, Box, Avatar, Chip, Grid2 } from "@mui/material";
import { GitHub, Twitter, YouTube } from "@mui/icons-material";

export const About = () => {
  return (
    <Box
      sx={{
        paddingTop:"22px",
        backgroundColor: "#0A0E12",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 20px 50px 20px",
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4} alignItems="center">
          {/* Left Section - Image */}
          <Grid2 size={{xs:12, md:5}} display="flex" justifyContent="center">
            <Box sx={{ position: "relative" }}>
              <Avatar
                src="../images/my_image.jpeg"
                alt="profile"
                sx={{
                  display:{xs:"none",sm:"block"},  
                  width: 250,
                  height: 320,
                  borderRadius: 2,
                  boxShadow: "20px 20px 0px rgb(48, 48, 91)",
                }}
              />
            </Box>
          </Grid2>

          {/* Right Section - Text */}
          <Grid2 size={{xs:12, md:7}}>
            <Chip
              label="About me"
              variant="outlined"
              sx={{ color: "gray", mb: 2 }}
            />
            <Typography variant="h4" fontWeight="bold">
              Curious about me? Here you have it:
            </Typography>

            <Typography variant="body1" color="gray" mt={2}>
              I am a passionate,{" "}
              <span style={{ color: "rgb(107, 169, 169)" }}>
                self-proclaimed designer
              </span>{" "}
              who specializes in full-stack development (
              <span style={{ color: "rgb(107, 169, 169)" }}>
                React.js & Node.js
              </span>
              ). I love bringing technical and visual aspects of digital
              products to life.
            </Typography>

            <Typography variant="body1" color="gray" mt={2}>
              I started my journey in 2022 and have grown into a progressive
              thinker, building modern web apps with{" "}
              <span style={{ color: "rgb(107, 169, 169)" }}>
                React, Express, Node, Mui, MongoDB, Git, Nginx, Socket.io
              </span>
              .
            </Typography>

            <Typography variant="body1" color="gray" mt={2}>
              When I am not coding, you can find me exploring the latest tech
              trends on <YouTube sx={{ fontSize: 18 }} /> youtube or sharing
              open-source projects on <GitHub sx={{ fontSize: 18 }} /> GitHub.
            </Typography>

            {/* Quick Facts */}
            <Box mt={3}>
              <Typography
                variant="body2"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                • B.Tech. in Computer Engineering
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                • Software Developer
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                • Avid learner
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                • Aspiring indie hacker
              </Typography>
            </Box>

            <Typography variant="body1" color="gray" mt={2}>
              I am available for freelance work, so feel free to reach out!
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

