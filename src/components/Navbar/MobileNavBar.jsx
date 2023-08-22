/* eslint-disable react/prop-types */
import { Box, IconButton } from "@mui/material";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import NavItems from "./NavItems";

const MobileNav = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      {openSidebar ? (
        <IconButton onClick={() => setOpenSidebar(!openSidebar)}>
          <X size={30} weight="bold" color="white" />
        </IconButton>
      ) : (
        <IconButton onClick={() => setOpenSidebar(!openSidebar)}>
          <List size={30} weight="bold" color="white" />
        </IconButton>
      )}

      {/* Sidebar  */}
      {openSidebar && (
        <Box
          sx={{
            height: "100vh",
            position: "absolute",
            zIndex: 2000,
            right: 0,
            top: "100px",
            padding:  2, 
            minWidth: 230,
            backgroundColor: "var(--primaryColor)",
          }}
        >
          <NavItems click={() => setOpenSidebar(!openSidebar)} />
        </Box>
      )}
    </>
  );
};

export default MobileNav;
