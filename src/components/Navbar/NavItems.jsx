import { Box, Link, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { PrimaryButton } from "../Buttons";

const NavItems = ({ click }) => {
  const menuList = ["Products", "Services", "About"];

  const linkStyling = {
    color: "white",
    textDecoration: "none",
    fontFamily: "var(--openSan)",
    fontSize: "16px",
    lineHeight: "28px",
  };

  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        spacing={5}
      >
        {menuList.map((item) => {
          return (
            <Box
              onClick={click}
              key={item}
              sx={{ typography: "body1", color: "white" }}
            >
              <Link sx={linkStyling} href="#">
                {item}
              </Link>
            </Box>
          );
        })}

        <PrimaryButton
          text="Log in"
          size="small"
          color="var(--primaryColor)"
          bgColor={"#FFFFFF"}
        />
      </Stack>
    </>
  );
};

export default NavItems;

NavItems.propTypes = {
  click: PropTypes.func,
};
