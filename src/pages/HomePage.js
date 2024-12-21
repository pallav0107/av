import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaSchool,
  FaHospital,
  FaGoogle,
  FaAws,
  FaMicrosoft,
} from "react-icons/fa";
import CustomerSlider from "../components/CustomerSlider";
import QuoteForm from "../components/QuoteForm";

function HomePage() {
  useEffect(() => {
    const smartsuppScript = document.createElement("script");
    smartsuppScript.type = "text/javascript";
    smartsuppScript.async = true;
    smartsuppScript.src = "https://www.smartsuppchat.com/loader.js?";
    smartsuppScript.onload = () => {
      window._smartsupp = window._smartsupp || {};
      window._smartsupp.key = "7fa94ee410290bcbbc3507e34b3ea27283e34211";
    };
    document.body.appendChild(smartsuppScript);
    return () => {
      document.body.removeChild(smartsuppScript);
    };
  }, []);

  const environments = [
    { name: "Residential", icon: <FaHome size={40} className="text-primary" /> },
    { name: "Office", icon: <FaBuilding size={40} className="text-success" /> },
    { name: "Factory", icon: <FaIndustry size={40} className="text-danger" /> },
    { name: "School", icon: <FaSchool size={40} className="text-warning" /> },
    { name: "Hospital", icon: <FaHospital size={40} className="text-info" /> },
  ];

  const partners = [
    { name: "AMX", image: "/amx.jpeg" },
    { name: "Crestron", image: "crestron.jpeg" },
    { name: "Google", icon: <FaGoogle size={50} className="text-warning" /> },
    { name: "AWS", icon: <FaAws size={50} className="text-success" /> },
    { name: "Microsoft", icon: <FaMicrosoft size={50} className="text-info" /> },
  ];

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Container component="main" sx={{ textAlign: "center", flexGrow: 1, mt: 5 }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Welcome to our AV Solutions
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Explore our advanced audio-visual services for every environment.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {environments.map((env) => (
            <Grid item xs={12} sm={6} md={4} key={env.name}>
               <Link to={`/services/${env.name.toLowerCase()}`} className="text-decoration-none">
              <Card
                sx={{
                  textAlign: "center",
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  '&:hover': { transform: "scale(1.05)" },
                }}
              >
                <CardContent>
                  {env.icon}
                  <Typography variant="h6" color="textPrimary" mt={2}>
                    {env.name}
                  </Typography>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" color="secondary" sx={{ mt: 5 }}>
          Our Customers in Sydney
        </Typography>
        <CustomerSlider />

        <Typography variant="h4" color="secondary" sx={{ mt: 5 }}>
          Our Trusted Partners
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          {partners.map((partner) => (
            <Grid item xs={6} sm={4} md={2} key={partner.name}>
              {partner.image ? (
                  <CardMedia
                  component="img"
                  src={partner.image}
                  alt={partner.name}
                  sx={{ maxHeight: 50, maxWidth: 100, mx: "auto", objectFit: "contain" }}
                />
              ) : (
                <Box sx={{ textAlign: "center" }}>{partner.icon}</Box>
              )}
              <Typography
                variant="body2"
                color="textPrimary"
                mt={1}
                textAlign="center"
              >
                {partner.name}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box mt={5}>
          <QuoteForm />
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
