import { Button } from "@mui/material";
import PropTypes from "prop-types";

const SecondaryButton = ({ text, color, size, border, ...other }) => {
  const generalStyle = {
    fontFamily: "var(--openSan)",
    textTransform: "inherit",
    fontWeight: 700,
    border: `2px solid ${border}`,
    ":hover": {
      backgroundColor: "transparent",
    },
  };
  const largeBtnStyling = {
    color: color,
    borderRadius: "56px",
    padding: {xs:"8px 20px", sm:"16px 56px"},
    fontFamily: "var(--openSan)",
    fontSize: {xs: "16px", sm:"14px", lg: "20px"},
    lineHeight: "28px",
  };

  const smallBtnStyling = {
    borderRadius: "24px",
    padding: "8px 40px",
    fontSize: "16px",
    lineHeight: "24px",
    color: color,
  };

  const extendStyling = size === "small" ? smallBtnStyling : largeBtnStyling;

  return (
    <Button
      variant="outlined"
      sx={{ ...generalStyle, ...extendStyling }}
      {...other}
      disableElevation
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;

SecondaryButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
};
