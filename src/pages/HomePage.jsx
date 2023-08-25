import Blog from "../components/Blog/Blog";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Testimonial from "../components/Testimonial/Testimonial";
import CTASection from "../components/CTA/CTA";
import { Box } from "@mui/material";
import { ellipse } from "../assets/hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FAQSection from "../components/Faq/Faq"
import Services from "../components/Services/Services";

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
      <FAQSection />
      <Blog />
      <CTASection />
      <Footer />
    </Box>
  );
};

export default HomePage;
