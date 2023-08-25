import Blog from "../components/Blog/Blog";
import Hero from "../components/Hero/Hero";
import Services from "../components/services/Services";
import Features from "../components/Features/Features";
import Testimonial from "../components/Testimonial/Testimonial";
import FaqSection from "../components/Faq/FAQ";
import CTASection from "../components/CTA/CTA";
import { Box } from "@mui/material";
import { ellipse } from "../assets/hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
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
      <Features />
      <Testimonial />
      <FaqSection />
      <Blog />
      <CTASection />
      <Footer />
    </Box>
  );
};

export default HomePage;
