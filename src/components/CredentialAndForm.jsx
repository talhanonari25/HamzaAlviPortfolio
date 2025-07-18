import React, { useState } from "react";
import "./CredentialAndForm.css";
import { Input } from "antd";
import { Button, TextField, Snackbar, Alert } from "@mui/material";
import axios from "axios";

const CredentialAndForm = ({ contactElementRef }) => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "subject" && value.split(" ").length > 50) {
      setSnackbarMessage("Subject cannot be more than 50 words");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    if (name === "message" && value.split(" ").length > 200) {
      setSnackbarMessage("Message cannot be more than 200 words");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name) {
      setSnackbarMessage("Name is required");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    if (!formData.email || !emailPattern.test(formData.email)) {
      setSnackbarMessage("Please enter a valid email address");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    if (formData.subject.split(" ").length > 50) {
      setSnackbarMessage("Subject cannot be more than 50 words");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    if (formData.message.split(" ").length > 200) {
      setSnackbarMessage("Message cannot be more than 200 words");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://api.burntbrains.com/web/portfolio",
        formData
      );
      console.log(`contact us form response===>`, res);
      setSnackbarMessage(
        "Thank you for reaching out! We've received your message and will get back to you shortly."
      );
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSnackbarMessage(error.response?.data?.message || "An error occurred");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <div className="CredentialAndFormContainer" ref={contactElementRef}>
        <div className="credentials">
          <div className="form-email">
            <p className="info-title">Write me</p>
            <p className="form-email-info">m.hamzaalvi719@gmail.com</p>
          </div>
          {/* <div className="form-address">
            <p className="info-title">My office</p>
            <p className="form-address-info">Askari 11, Lahore</p>
          </div> */}
          <div className="form-social">
            <p className="info-title" style={{marginBottom: "0px"}}>Follow us</p>
            <div className="form-social-info" style={{ width: "70%" }}>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/hamza-alvi-378baa1ab"
                    target="_blank"
                    className="credential-link"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Hamza719alvi"
                    target="_blank"
                    className="credential-link"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <p className="info-title">Or fill this form</p>
            <Input
              placeholder="Name"
              name="name"
              value={formData.name}
              variant="underlined"
              className="custom-input"
              onChange={handleChange}
            />
            <Input
              placeholder="Email"
              name="email"
              value={formData.email}
              variant="underlined"
              className="custom-input"
              onChange={handleChange}
            />
            <Input
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              variant="underlined"
              className="custom-input"
              onChange={handleChange}
            />
            <TextField
              placeholder="Write Your Message"
              variant="standard"
              multiline
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              fullWidth
              InputProps={{
                disableUnderline: false,
                sx: {
                  "&:before": {
                    borderBottom: "1px solid #ffffff33",
                  },
                  "&:after": {
                    borderBottom: "1px solid #ffffff33",
                  },
                  color: "#fff",
                },
              }}
              inputProps={{
                style: { color: "#fff", mt: 2, padding: "10px 5px" },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                fontWeight: "bold",
                mt: 2,
                padding: "10px 20px",
                borderRadius: "25px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#e5e5e5",
                },
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CredentialAndForm;
