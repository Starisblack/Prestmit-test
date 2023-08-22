import { Box } from "@mui/material";
import logo from "../assets/Logo.png";

const Logo = () => {
  return (
    <Box sx={{ width: 162, height: {xs: 30, sm: 42} }}>
      <img src={logo} alt="prestmit-test"></img>
    </Box>
  );
};

export default Logo;
