import { Typography, Button, Container, Box, Grid } from "@mui/material";
import React from "react";
import JobCard from "../Jobcard";

export default function JobGrid() {
  const jobs = [
    "Web Designer",
    "Full Stack Developer",
    "Quality Analyst",
    "UI/UX Designer",
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 5,
        bgcolor: "#fff",
        borderBottom: "1px solid",
        borderColor: "divider",
        width: { sm: "100%" },
      }}
    >
      <Typography
        sx={{ textAlign: "center" }}
        component="h2"
        variant="h4"
        color="text.primary"
      >
        Featured Jobs
      </Typography>
      <Typography
        sx={{ width: "60%", margin: "auto", textAlign: "center", mb: 6 }}
        variant="body1"
        color="text.secondary"
      >
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {jobs.map((job) => {
          return (
            <Grid item>
              <JobCard title={job} />
            </Grid>
          );
        })}

        {/* <Grid item>
          <JobCard />
        </Grid> */}
      </Grid>
    </Box>
  );
}
