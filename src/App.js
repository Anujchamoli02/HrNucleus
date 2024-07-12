import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  Container,
  Box,
  Autocomplete,
} from "@mui/material";
import { Grid } from "@mui/material";

import { BookmarkBorder, CheckCircle, Star } from "@mui/icons-material";
import { Search, DarkMode } from "@mui/icons-material";
import JobCard from "./Jobcard";
import AutoSearch from "./AutoSearch";

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            Jobstack
          </Typography>
          <IconButton color="inherit">
            <DarkMode />
          </IconButton>
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{ mx: 2 }}
          />
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Join us & <span style={{ color: "green" }}>Explore</span>
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          <span style={{ color: "green" }}>Thousands</span> of Jobs
        </Typography>
        <Typography variant="body1" color="textSecondary">
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
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <AutoSearch className="mr-5 surface-900" />
          <Select
            variant="outlined"
            defaultValue="Afghanistan"
            size="small"
            sx={{
              ml: 2,
              mr: 2,
              width: "150px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "grey.400",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          >
            <MenuItem value="Afghanistan">Afghanistan</MenuItem>
            <MenuItem value="Pakistan">Pakistan</MenuItem>

            {/* Add more options as needed */}
          </Select>
          <Select
            variant="outlined"
            defaultValue="Full Time"
            size="small"
            sx={{
              mr: 2,
              width: "150px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "grey.400",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          >
            <MenuItem value="Full Time">Full Time</MenuItem>
            <MenuItem value="Half Time">Half Time</MenuItem>
            {/* Add more options as needed */}
          </Select>
          <Button
            variant="contained"
            color="success"
            startIcon={<Search />}
            sx={{
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

        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
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
}

export default App;
