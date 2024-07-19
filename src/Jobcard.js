import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { CheckCircle, Star, WhatsApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const JobCard = () => {
  const navigate = useNavigate();
  const Apply = () => {
    navigate("/login");
  };
  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "auto",
        mt: 4,
        boxShadow: 3,
        borderRadius: 3,
        p: 1,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Web Designer
              </Typography>
              <Typography variant="body2" color="textSecondary">
                2 days ago
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
          <Chip label="Full Time" color="success" sx={{ mr: 2 }} />
          <Typography variant="body2" color="textSecondary">
            Est. time: 1 to 3 months
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ ml: 2 }}>
            Hourly: $16 - $20
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Looking for an experienced Web Designer for our company.
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          <Chip label="HTML" variant="outlined" />
          <Chip label="CSS" variant="outlined" />
          <Chip label="SASS" variant="outlined" />
          <Chip label="SCSS" variant="outlined" />
          <Chip label="Photoshop" variant="outlined" />
          <Chip label="Graphics" variant="outlined" />
          <Chip label="Bootstrap" variant="outlined" />
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckCircle color="primary" sx={{ mr: 1 }} />
          <Typography variant="body2">Verified</Typography>
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                sx={{ color: index < 4 ? "gold" : "grey.400" }}
              />
            ))}
          </Box>

          <Typography variant="body2" sx={{ ml: 2 }}>
            Australia
          </Typography>
        </Box>
        <Button variant="contained" color="success" onClick={Apply}>
          Apply Now
        </Button>
        <Button variant="contained" color="success" startIcon={<WhatsApp />}>
          Apply Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
