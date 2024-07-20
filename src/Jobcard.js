import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Chip,
  Modal,
} from "@mui/material";
import {
  CenterFocusStrong,
  CheckCircle,
  Star,
  WhatsApp,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 8,
  boxShadow: 24,
  paddingBottom: 2,
};

const JobCard = ({ title }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const Apply = () => {
    navigate("/login");
  };
  return (
    <>
      <Card
        sx={{
          maxWidth: 600,
          margin: "auto",
          mt: 0,
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
                  {title}
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
          <Button variant="contained" color="success" onClick={handleOpen}>
            Apply Now
          </Button>
          <Button variant="contained" color="success" startIcon={<WhatsApp />}>
            Apply Now
          </Button>
        </CardActions>
      </Card>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{
              textAlign: "center",
              bgcolor: "#fff",
              borderRadius: 8,
              color: "#2e7d32",
              pb: 1,
              pt: 3,
            }}
          >
            Job Opening / Post Resume
          </Typography>
          <hr></hr>
          <form className="form-container">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-field"
              // value={formData.firstName}
              // onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input-field"
              // value={formData.lastName}
              // onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
              // value={formData.email}
              // onChange={handleChange}
              required
            />
            <label for="myfile">Attachment (Optional):</label>
            <input
              type="file"
              name="resume"
              placeholder="Resume"
              className="input-field"
            ></input>
            <Button variant="contained" color="success" sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default JobCard;
