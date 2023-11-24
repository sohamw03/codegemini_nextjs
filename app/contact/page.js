"use client";
import { Alert, Button, ButtonGroup, Collapse, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const MyTextField = styled(TextField)({
  "& input": {
    color: "#A0AAB4",
  },
  "& label": {
    color: "#A0AAB4",
  },
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", description: "" });
  const [alert, setAlert] = useState(false);

  const resetForm = () => {
    setForm({ name: "", phone: "", email: "", description: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetForm();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const responseJson = await response.json();
      console.log(responseJson);
      setAlert(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Typography variant="h4">Contact Us</Typography>
        <MyTextField
          label="Name"
          type="text"
          fullWidth
          required
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
          value={form.name}
        />
        <MyTextField
          label="Phone"
          type="tel"
          fullWidth
          required
          onChange={(e) => {
            setForm({ ...form, phone: e.target.value });
          }}
          value={form.phone}
        />
        <MyTextField
          label="Email"
          type="email"
          fullWidth
          required
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
          value={form.email}
        />
        <MyTextField
          label="Description"
          type="textarea"
          multiline
          fullWidth
          onChange={(e) => {
            setForm({ ...form, description: e.target.value });
          }}
          value={form.description}
        />
        <ButtonGroup variant="contained" fullWidth sx={{ marginTop: "1rem" }}>
          <Button type="reset" onClick={resetForm} color="success" fullWidth sx={{ height: "3rem", borderColor: "#212121!important" }}>
            Cancel
          </Button>
          <Button type="submit" color="success" fullWidth sx={{ height: "3rem" }}>
            Send
          </Button>
        </ButtonGroup>
      </form>
      <Collapse in={alert} sx={{ position: "fixed", bottom: 0 }}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlert(false);
              }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ margin: 2 }}>
          Request sent successfully!
        </Alert>
      </Collapse>
    </>
  );
}
