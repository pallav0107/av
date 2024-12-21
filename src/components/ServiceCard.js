import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

function ServiceCard({ service }) {
  return (
    <Card
      sx={{
        mb: 4,
        boxShadow: 3,
        textAlign: "center",
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardContent>
        <Box sx={{ fontSize: 50, color: "primary.main" }}>{service.icon}</Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          {service.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          {service.description}
        </Typography>
        <Box sx={{ mt: 2, textAlign: "left" }}>
          <Typography variant="body2" color="textPrimary">
            <strong>AMX Devices:</strong> {service.amxDevices}
          </Typography>
          <Typography variant="body2" color="textPrimary">
            <strong>Crestron Devices:</strong> {service.crestronDevices}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
