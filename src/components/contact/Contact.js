import { useState } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Contact(color) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const theme = createTheme({
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: color.color == 'dark' ? "#ffffff" : '#111111', // all input text color
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: color.color == 'dark' ? "#ffffff" : '#111111', // default
            "&.Mui-focused": {
              color: color.color == 'dark' ? "#ffffff" : '#111111', // focused
            },
          },
        },
      },
      MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": { borderBottomColor: "#414141" }, // default
          // "&:hover:not(.Mui-disabled):before": { borderBottomColor: "#61fe25" }, // hover
          "&:after": { borderBottomColor: "#61fe25" }, // focused
        },
      },
    },
    },
  });

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple email check
    return regex.test(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(value !== "" && !validateEmail(value));
  };

  return (
    <div
      className="contact"
    >
      <h2 className="say-hello mb-8">Say hello</h2>

      <div className="order-sign">
        <div className="order-sign-line contact-w-full"></div>
        <div className="order-sign-square"></div>
      </div>

      <ThemeProvider theme={theme}>
        <div
          className="input-group"
        >
          <TextField
            fullWidth
            type="email"
            label="Your email"
            variant="standard"
            value={email}
            onChange={handleChange}
            error={error}
            helperText={error ? "Please enter a valid email address" : ""}
            required
          />
          <TextField
            className="mt-8i"
            fullWidth
            type="text"
            label="Message"
            variant="standard"
            multiline
          />
        </div>
      </ThemeProvider>

      <div
        className="project-btn-container mt-16"
      >
        <a
          className="project-btn color-white transition"
          href="#"
        >
          Send message
        </a>
      </div>
    </div>
  );
}

export default Contact;