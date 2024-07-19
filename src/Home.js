// src/App.js
import React from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import JobCard from "./Jobcard";
import AutoSearch from "./AutoSearch";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./images/pexels-shvets-production-7176317.jpg";
import logo from "./images/file.png";
import StateAuto from "./StateAuto";
import "./App.css";

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), #00A36C), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "120vh",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, ml: 4 }}>
            <img src={logo} alt="HR Nucleus Logo" height="100" />
          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={{ textAlign: "center", pt: 8 }}>
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
            // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
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
      <Box sx={{ flexGrow: 1, padding: 10 }}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item>
            <JobCard />
          </Grid>
          <Grid item>
            <JobCard />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
