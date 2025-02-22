import {
  Container,
  Grid2,
  Typography,
  Box,
  Chip,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";


const projects = [
  {
    name: "Chatter Box",
    description:
      "A real-time chat application using MERN Stack and Socket.io, and successfully deployed the backend on AWS EC2 with NGINX as a reverse proxy! 🔥",
    image: "../../images/chatterBox.png",
    link: "https://ping-me-frontend.vercel.app",
    techStack: [
      "React",
      "Express.js",
      "node",
      "MongoDB",
      "MUI",
      "JWT",
      "Socket.io",
      "EC2 Instance",
      "Nginx",
      "Cloudinary",
      "Git",
    ],
  },
  {
    name: "BikeMart",
    description:
      "BikeMart is a modern and responsive e-commerce platform designed for motorcycle enthusiasts. It provides a seamless shopping experience for users looking to buy bikes, accessories, and spare parts. Built with React, Material-UI, Node.js, and MongoDB, BikeMart ensures a smooth and secure online purchase journey.",
    image: "../../images/bikemart.png",
    link: "https://ecommerce-frontend-blond-tau.vercel.app",
    techStack: [
      "React",
      "node",
      "Express.js",
      "MongoDB",
      "MUI",
      "JWT",
      "Cloudinary",
      "Nginx",
      "Git",
    ],
  },
  {
    name: "node-data-cryption",
    description:
      "This is a simple Node.js package that provides functions to securely encrypt and compare passwords using the SHA-256 hashing algorithm.",
    image: "../../images/node_data_cryption.png",
    link: "https://www.npmjs.com/package/node-data-cryption",
    techStack: [
      "Express.js",
      "node",
      "Git",
    ],
  },
];

export const Projects = () => {
 

  const handleNavigate=(data)=>{
    window.location.href=data.link
  }
  return (
    <Box
      sx={{
        backgroundColor: "#0A0E12",
        color: "white",
        py: 6,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Chip label="Work" variant="outlined" sx={{ color: "gray", mb: 2 }} />
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Some of the noteworthy projects I have built:
        </Typography>

        <Grid2 container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid2 size={{xs:12}} key={index}>
              <Card
                onClick={()=>handleNavigate(project)}
                sx={{
                  backgroundColor: "#171B22",
                  color: "white",
                  borderRadius: 3,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  overflow: "hidden",
                  cursor:"pointer"
                }}
              
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.name}
                  sx={{ width: { xs: "100%", md: "50%" }, height: "auto" }}
                />
                <CardContent sx={{ p: 3, textAlign: "left" }}>
                  <Typography variant="h6" fontWeight="bold">
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, mb: 2, color: "gray" }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.techStack.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        sx={{ backgroundColor: "#252A34", color: "white" }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};
