import { Button } from "@mui/material";
import PropTypes from "prop-types";

const MainButton = ({ text, ...other}) => {
  const buttonStyle = {
    color: "#0A2640",
    textTransform: "inherit",
    padding: "4px 40px",
    borderRadius: "24px",
    border: "2px solid #FFF",
    backgroundColor: "#FFF",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 700,

    ":hover": {
      backgroundColor: "white",
    },
  };

  return (
    <Button sx={buttonStyle} {...other}  disableElevation>
      {text}
    </Button>
  );
};

export default MainButton;

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
};
