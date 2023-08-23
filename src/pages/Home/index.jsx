import { Box } from "@mui/material";
import Hero from "./Hero";
import Navbar from "../../components/Navbar";
import { ellipse } from "../../assets/hero";
import Services from "./services";
import Testimonial from "./Testimonial";
import FaqSection from "./Faq";
import Blog from "./Blog";


const Homepage = () => {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          backgroundImage: `url(${ellipse})`,
          zIndex: 600,
          width: { xs: 300, sm: 400, md: 620 },
          height: { xs: 300, sm: 400, md: 600 },
          right: 0,
          top: " -50px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>

      <Navbar />
      <Hero />
      <Services />
      <Testimonial />
      <FaqSection />
      <Blog />
    </Box>
  );
};

export default Homepage;
