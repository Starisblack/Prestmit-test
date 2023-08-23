import { Button } from "@mui/material";
import PropTypes from "prop-types";

const PrimaryButton = ({ text, color, size, bgColor, ...other }) => {
  const generalStyle = {
    fontFamily: "var(--openSan)",
    textTransform: "inherit",
    fontWeight: 700,
    border: `2px solid ${bgColor}`,
    backgroundColor: bgColor,
    ":hover": {
      backgroundColor: "transparent",
    },
  };
  const largeBtnStyling = {
    color: color,
    borderRadius: "56px",
    padding: "16px 56px",
    fontFamily: "var(--openSan)",
    fontSize: "20px",
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
      sx={{ ...generalStyle, ...extendStyling }}
      {...other}
      disableElevation
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
};
