import { Container, Grid, Typography, Box, Avatar, Stack } from "@mui/material";
import { LocationOn, GitHub, LinkedIn, YouTube } from "@mui/icons-material";

export const Hero = () => {
  const handleNavigate = (link) => {
    window.location.href = link;
  };
  return (
    <Box
      sx={{
        backgroundColor: "#0A0E12",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Section - Text */}
          <Grid item xs={12} md={7}>
            <Typography variant="h3" fontWeight="bold">
              Hi, I am Someswar{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </Typography>
            <Typography variant="body1" color="gray" mt={2}>
              I am a full-stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive.
            </Typography>
            <Typography variant="body1" color="gray" mt={1}>
              Even though I have been creating web applications for years, I
              still love it as if it was something new.
            </Typography>

            {/* Location */}
            <Stack direction="row" alignItems="center" spacing={1} mt={3}>
              <LocationOn sx={{ color: "rgb(107, 169, 169)" }} />
              <Typography color="white">Bankura, West Bengal, India</Typography>
            </Stack>

            {/* Availability */}
            <Stack direction="row" alignItems="center" spacing={1} mt={1}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "rgb(107, 169, 169)",
                }}
              />
              <Typography color="white">Available for new projects</Typography>
            </Stack>

            {/* Social Icons */}
            <Stack direction="row" spacing={2} mt={3}>
              <GitHub
                sx={{ color: "white", fontSize: 30, cursor: "pointer" }}
                onClick={() => handleNavigate("https://github.com/som-2001/")}
              />
              <YouTube
                sx={{ color: "white", fontSize: 30, cursor: "pointer" }}
                onClick={() =>
                  handleNavigate("https://www.youtube.com/@somgorai4608/videos")
                }
              />
              <LinkedIn
                sx={{ color: "white", fontSize: 30, cursor: "pointer" }}
                onClick={() =>
                  handleNavigate(
                    "https://www.linkedin.com/in/som-gorai-3a12582b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  )
                }
              />
            </Stack>
          </Grid>

          {/* Right Section - Image */}
          <Grid item xs={12} md={5} display="flex" justifyContent="center">
            <Box sx={{ position: "relative" }}>
              <Avatar
                src="../../images/my_image.jpeg"
                alt="profile"
                sx={{
                  width: 280,
                  height: 280,
                  borderRadius: 2,
                  boxShadow: "20px 20px 0 rgb(48, 48, 91)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
