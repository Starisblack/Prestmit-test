import { Box } from "@mui/material";
import Hero from "./Hero";
import Navbar from "../../components/Navbar";

const Homepage = () => {
  return (
    <Box sx={{width: "100%", position: "relative"}}>
      <Navbar />
      <Hero />
    </Box>
  );
};

export default Homepage;
