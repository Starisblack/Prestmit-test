import { Box, Link, Stack } from "@mui/material";
import MainButton from "../MainButton";
import PropTypes from "prop-types";

const NavItems = ({click}) => {
  const menuList = ["Products", "Services", "About"];

  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        spacing={5}
      >
        {menuList.map((item) => {
          return (
            <Box onClick={click} key={item} sx={{ typography: "body1", color: "white" }}>
              <Link sx={{ color: "white", textDecoration: "none" }} href="#">
                {item}
              </Link>
            </Box>
          );
        })}
         <MainButton text="Log in" />
      </Stack>
    </>
  );
};

export default NavItems;

NavItems.propTypes = {
    click: PropTypes.func
}
