import { Container, Grid, Typography, Box, Chip, Card, CardContent } from "@mui/material";

const experiences = [
  {
    company: "Klizo solutions pvt. ltd.",
    role: "Fresher web Developer",
    period: "Nov 2024 - Present",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    company: "Lyss Technology pvt. ltd.",
    role: "React Developer",
    period: "May 2024 - Nov 2024",
    responsibilities: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

export const Experience = () => {
  return (
    <Box sx={{ backgroundColor: "#0A0E12", color: "white", py: 6, textAlign: "center" }}>
      <Container maxWidth="md">
        <Chip label="Experience" variant="outlined" sx={{ color: "gray", mb: 2 }} />
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Here is a quick summary of my most recent experiences:
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  backgroundColor: "#171B22",
                  color: "white",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#69db7c", fontWeight: "bold" }}>
                    {exp.company}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" fontWeight="bold">
                      {exp.role}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      {exp.period}
                    </Typography>
                  </Box>
                  <ul style={{ textAlign: "left", marginTop: "10px", paddingLeft: "20px" }}>
                    {exp.responsibilities.map((task, i) => (
                      <li key={i} style={{ marginBottom: "5px" }}>
                        <Typography variant="body2">{task}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

