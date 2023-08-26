import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { heroImg } from "../../assets/hero";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import HeroSlider from "../Sliders/HeroSlider";
import { styles } from "../../globalStyles";
import Animation from "../../utils/animation";

const Hero = () => {
  return (
    <Box
      sx={{
        paddingTop: "162px",
        paddingBottom: "64px",
        backgroundColor: "#0A2640",
        position: "relative",
        color: "white",
      }}
    >
      <Container
        sx={{
          maxWidth: { lg: 1400 },
          position: "relative",
          zIndex: 700,
          textAlign: { xs: "center", md: "left" },
          paddingX: { xs: "5vw", lg: "100px" },
        }}
      >
        <Grid
          container
          justifyContent={"space-between"}
          rowSpacing={{ xs: 10, md: 0 }}
          alignItems={"center"}
        >
          {/* hero left */}
          <Grid item xs={12} md={5.67}>
            <Animation type="fade">  
              <Box
                sx={{
                  // width: 567,
                  maxWidth: "100%",
                  marginX: { xs: "auto", md: 0 },
                }}
              >
                <Typography sx={styles.header} variant="body1">
                  Save time by building fast with Boldo Template
                </Typography>

                <Typography
                  sx={{ ...styles.paragraph, margin: "16px 0 40px 0" }}
                >
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. First mover advantage innovator success
                  deployment non-disclosure.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  justifyContent={{ xs: "center", md: "left" }}
                  spacing={3}
                  marginTop={"40px"}
                >
                  <PrimaryButton
                    text="Buy template"
                    color="var(--primaryColor)"
                    bgColor={"#69E6A6"}
                    size="large"
                  />

                  <SecondaryButton
                    text="Explore"
                    color="white"
                    border="white"
                  />
                </Stack>
              </Box>
            </Animation>
          </Grid>

          {/* hero right */}
          <Grid item xs={12} md={4.94}>
            <Box
              sx={{
                margin: "0 auto",
                // maxWidth: "100%",
                width: "100%",
                height: "423px",
              }}
            >
              <img src={heroImg} alt="prestmit-hero-img" />
            </Box>
          </Grid>
        </Grid>

        {/* logo sliding */}
        <Box
          sx={{
            marginTop: "56px",
            height: "max-content",
            position: "relative",
          }}
        >
          <Box
            sx={{
              height: "93px",
              zIndex: 400,
              position: "absolute",
              boxSizing: "border-box",
              width: "100%",
              background:
                "linear-gradient(90deg, #0A2640 0%, rgba(10, 38, 64, 0.11) 32.29%, rgba(10, 38, 64, 0.00) 74.48%, #0A2640 100%)",
            }}
          ></Box>

          <HeroSlider />
        </Box>
      </Container>

      {/* */}
    </Box>
  );
};

export default Hero;
