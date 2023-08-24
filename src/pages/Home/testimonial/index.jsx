import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import TestimonialCard from "./TestimonialCard";
import { albus, harry, severus } from "../../../assets/testimonial";
import TestimonialSlider from "../../../components/Slider/TestimonialSlider";
import useResponsive from "../../../hooks/useResponsive";

const Testimonial = () => {
  const isDesktop = useResponsive("up", "md");
  const testimonialData = [
    {
      id: 1,
      content:
        "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      name: "Albus Dumbledore",
      img: albus,
      title: "Manager @ Howarts",
    },

    {
      id: 2,
      content:
        "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      name: "Severus Snape",
      img: severus,
      title: "Manager @ Slytherin",
    },

    {
      id: 3,
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      name: "Harry Potter",
      img: harry,
      title: "Team Leader @ Gryffindor",
    },
  ];
  return (
    <>
      <Container
        sx={{
          bgcolor: "var(--primaryColor)",
          maxWidth: { lg: "100%" },

          color: "white",
          padding: { xs: "80px 20px", lg: "96px  156px 96px  150px" },
        }}
      >
        <Stack direction={"row"} justifyContent="space-between">
          <Typography
            sx={{
              textAlign: { xs: "center", lg: "left" },
              fontFamily: "var(--manrope)",
              fontSize: { xs: "25px", sm: "48px" },
              fontWeight: 400,
              lineHeight: { xs: "38px", sm: "72px" },
              width: { xs: "100%", md: "65%" },
            }}
          >
            An enterprise template to ramp up your company website
          </Typography>

          <Stack
            sx={{ display: { xs: "none", md: "block" } }}
            direction="row"
            spacing={3.5}
            alignSelf={"flex-end"}
          >
            <IconButton sx={navigationBtnStyling}>
              <ArrowLeft color="#0A2640" size={32} />
            </IconButton>

            <IconButton sx={navigationBtnStyling}>
              <ArrowRight color="#0A2640" size={32} />
            </IconButton>
          </Stack>
        </Stack>

        {/* testimonial sliding  */}

        {isDesktop && (
          <Stack
            marginTop={"72px"}
            spacing={{ md: 2.75 }}
            direction="row"
            sx={{
              justifyContent: { xs: "center", md: "flex-start" },
              flexWrap: { xs: "wrap", md: "nowrap" },
              gap: { xs: "50px", md: 0 },
            }}
          >
            {testimonialData.map((el) => (
              <TestimonialCard
                key={el.id}
                name={el.name}
                img={el.img}
                content={el.content}
                title={el.title}
              />
            ))}
          </Stack>
        )}

        {!isDesktop && (
          <Box marginTop="72px">
            <TestimonialSlider>
              {testimonialData.map((el) => (
                <TestimonialCard
                  key={el.id}
                  name={el.name}
                  img={el.img}
                  content={el.content}
                  title={el.title}
                />
              ))}
            </TestimonialSlider>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Testimonial;

const navigationBtnStyling = {
  backgroundColor: "white",
  ":hover": { backgroundColor: "white", opacity: 0.8 },
  width: 72,
  height: 72,
};
