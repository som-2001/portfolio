import { Container, Grid2, Typography, Box, Chip } from "@mui/material";

const skills = [
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  // { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  // { name: "Nest.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" },
  { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
  // { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  // { name: "Sass/SCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { "name": "Mui", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  // { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  // { name: "Cypress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" },
  // { name: "Storybook", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export const Skills = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#242430",
        color: "white",
        textAlign: "center",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <Chip label="Skills" variant="outlined" sx={{ color: "gray", mb: 2 }} />
        <Typography variant="h5" fontWeight="bold" mb={3}>
          The skills, tools and technologies I am really good at:
        </Typography>

        <Grid2 container spacing={3} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid2 key={index}  size={{xs:4, sm:3, md:2}}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img src={skill.logo} alt={skill.name} width={50} height={50} />
                <Typography variant="body2" mt={1}>
                  {skill.name}
                </Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

