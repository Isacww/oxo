import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2c3260", // Match your background
    },
    secondary: {
      main: "#b30000", // Match navbar color
    },
    background: {
      default: "#2c3260",
      paper: "#f4f4f4",
    },
  },
  typography: {
    fontFamily: "'Roboto Flex', sans-serif",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {color:"#f4f4f4"},
          "& label": {color:"#f4f4f4"},
          "& label.Mui-focused": { color: "secondary" }, // Focused label color
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" }, // Default border
            "&:hover fieldset": { borderColor: "primary" }, // Hover border
            "&.Mui-focused fieldset": { borderColor: "secondary" } // Focused border
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#2c3260", // Dark background
          color: "#ffffff", // White text
          boxShadow: "5px 5px 15px rgba(0,0,0,0.3)", // Soft shadow
          borderRadius: "15px", // Rounded corners
          padding: "10px",
          "&:hover": {
            transform: "scale(1.05)", // Hover effect
            transition: "0.3s ease-in-out",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          color: "#ffcc00", // Custom title color
        },
        body2: {
          color: "#bbbbbb", // Custom text color
        },
      },
    },
  },
});

export default theme;
