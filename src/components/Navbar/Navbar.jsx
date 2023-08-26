import { Box, Stack } from "@mui/material";
import Logo from "../Logo";
import NavItems from "./NavItems";
import useResponsive from "../../hooks/useResponsive";
import MobileNav from "./MobileNavBar";

const Navbar = () => {
  const isMobile = useResponsive("down", "md");

  const navBarStyling = {
    margin: "0 auto",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: 1400,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 1000,
    top: {xs: 20, sm: 56},
    paddingX: { xs: "5vw", lg: "100px" },
  }

  return (
    <Box
      sx={navBarStyling}
    >
      <Stack
        justifyContent={"space-between" }
        alignItems={"center"}
        direction="row"
        sx={{ maxWidth: "100%" }}
      >
        <Logo />
        {isMobile ? <MobileNav /> : <NavItems />}
      </Stack>
    </Box>
  );
};

export default Navbar;
