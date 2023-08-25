import { Box, Stack } from "@mui/material";
import Logo from "../Logo";
import NavItems from "./NavItems";
import useResponsive from "../../hooks/useResponsive";
import MobileNav from "./MobileNavBar";

const Navbar = () => {
  const isMobile = useResponsive("down", "md");

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        position: "absolute",
        zIndex: 1000,
        top: {xs: 20, sm: 56},
        paddingX: { xs: "5vw", md: "100px" },
      }}
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
