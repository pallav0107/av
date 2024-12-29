import React, { useEffect } from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";




function Footer() {
  useEffect(() => {
    const smartsuppScript = document.createElement("script");
    smartsuppScript.type = "text/javascript";
    smartsuppScript.async = true;
    smartsuppScript.src = "https://www.smartsuppchat.com/loader.js?";
    smartsuppScript.onload = () => {
      console.log("Smartsupp script loaded.");
      window._smartsupp = window._smartsupp || {};
      window._smartsupp.key = "7fa94ee410290bcbbc3507e34b3ea27283e34211";
    };
    document.body.appendChild(smartsuppScript);
    return () => {
      document.body.removeChild(smartsuppScript);
    };
  }, []);
  return (
      <Box
        component="footer"
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 3,
          mt: "auto",
        }}
      >
        <Container>
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} AV Solutions. All rights reserved.
          </Typography>
          <Typography variant="body2" align="center" mt={1}>
            Australian Company Number: 645 377 091
          </Typography>
          <Typography variant="body2" align="center" mt={1}>
            Email: <Link href="mailto:helo@ksolutions.ai" color="inherit">helo@ksolutions.ai</Link>
          </Typography>
          <Typography variant="body2" align="center" mt={1}>
            Phone: <Link href="tel:+61416283705" color="inherit">+61 416 283 705</Link>
          </Typography>
          <Grid container justifyContent="center" spacing={2} mt={2}>
            <Grid item>
              <Link href="https://facebook.com" color="inherit" underline="none">
                Facebook
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://twitter.com" color="inherit" underline="none">
                Twitter
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://linkedin.com" color="inherit" underline="none">
                LinkedIn
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
}

export default Footer;
