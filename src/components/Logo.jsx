import { Box } from "@mui/material";
import logo from "../assets/Logo.png";
import footerLogo from "../assets/footer-logo.png";
import PropTypes from "prop-types";

const Logo = ({ footer }) => {
  const footerStyling = {
    width: 162,
    height: { xs: 30, sm: 42 },
    marginLeft: footer ? { xs: "-21px", sm: 0 } : "0px",
  };
  return (
    <Box sx={footerStyling}>
      {footer ? (
        <img src={footerLogo} alt="prestmit-test" />
      ) : (
        <img src={logo} alt="prestmit-test" />
      )}
    </Box>
  );
};

export default Logo;

Logo.propTypes = {
  footer: PropTypes.bool,
};
