import { useState } from "react";
import { Container, TextField, Button, Typography, Box, Grid, Chip } from "@mui/material";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => console.error("EmailJS Error:", error));
  };

  return (
    <Box sx={{ backgroundColor: "#0A0E12", color: "white", py: 6, textAlign: "center" }}>
      <Container maxWidth="sm">
        <Chip label="Contact" variant="outlined" sx={{ color: "gray", mb: 2 }} />
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Get in Touch
        </Typography>
        <Typography variant="body2" color="gray" mb={4}>
          Feel free to reach out. I will get back to you as soon as possible!
        </Typography>

        {isSent ? (
          <Typography color="green">Message sent successfully! ✅</Typography>
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ style: { color: "white" } }}
                  sx={{
                    input: { color: "white" },
                    backgroundColor: "#171B22",
                    borderRadius: 1,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ style: { color: "white" } }}
                  sx={{
                    input: { color: "white" },
                    backgroundColor: "#171B22",
                    borderRadius: 1,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ style: { color: "white" } }}
                  sx={{
                    textarea: { color: "white" },
                    backgroundColor: "#171B22",
                    borderRadius: 1,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "#3B82F6", color: "white", fontWeight: "bold", px: 4 }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Container>
    </Box>
  );
};

