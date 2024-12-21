import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";

function Footer() {
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
