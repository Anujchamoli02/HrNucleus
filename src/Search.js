// src/SearchResults.js
import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import JobCard from "./Jobcard";

const Search = () => {
  return (
    <>
      <Typography ml={22} mt={10} variant="h4" component="h1">
        Search Results
      </Typography>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <JobCard />
          </Grid>
          <Grid item>
            <JobCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Search;
