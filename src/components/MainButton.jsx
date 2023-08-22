import { Button } from "@mui/material";
import PropTypes from "prop-types";

const MainButton = ({ text, variant, fSize, padding, radius, color, bgColor,  ...other}) => {
  const buttonStyle = {
    color: color,
    textTransform: "inherit",
    padding: padding,
    borderRadius: radius,
    backgroundColor: bgColor,
    fontSize: fSize,
    fontWeight: 700,
    ":hover": {
      backgroundColor: bgColor
    },
  };

  return (
    <Button variant={variant} sx={{...buttonStyle, ...other}} {...other}  disableElevation>
      {text}
    </Button>
  );
};

export default MainButton;

MainButton.propTypes = {
  text: PropTypes.string,
  lineHeight: PropTypes.string,
  fSize: PropTypes.string,
  radius: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  variant: PropTypes.string,
};
