import React from "react";
import { Typography, Button, Container, Box, Grid } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AutoSearch from "../../AutoSearch";
import StateAuto from "../../StateAuto";

export default function SearchForm() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <Container sx={{ textAlign: "center", pt: 10, pb: 17 }}>
      <Typography variant="h3" component="h1" color={"white"} gutterBottom>
        You devote yourself to <span style={{ color: "green" }}>Others</span>
      </Typography>
      <Typography variant="h4" component="h2" color={"white"} gutterBottom>
        <span style={{ color: "green" }}>We devote</span> our resources to you
      </Typography>
      <Typography variant="body1" color="white">
        Find Jobs, Employment & Career Opportunities. Some of the companies
        we've helped recruit excellent applicants over the years.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          p: 2,
          backgroundColor: "transparent",
          borderRadius: "8px",
        }}
      >
        <AutoSearch />
        <StateAuto className="state-margin" />

        <Button
          variant="contained"
          color="success"
          startIcon={<Search />}
          onClick={handleSearch}
          sx={{
            ml: 1,
            height: "40px",
            backgroundColor: "green",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
        >
          Search
        </Button>
      </Box>

      <Typography variant="body2" color={"white"} sx={{ mt: 2 }}>
        Popular Searches : Designer, Developer, Web, IOS, PHP Senior Engineer
      </Typography>
    </Container>
  );
}
