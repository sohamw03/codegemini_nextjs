"use client";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Contact() {
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

  return (
    <form>
      <MyTextField label="Outlined" style={{ color: "red" }} />
    </form>
  );
}
