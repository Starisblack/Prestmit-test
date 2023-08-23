import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { heroImg } from "../../assets/hero";
import Slider from "../../components/Slider";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";

const Hero = () => {
  return (
    <Box
      sx={{
        // minHeight: "100vh",
        paddingTop: "162px",
        paddingBottom: "64px",
        backgroundColor: "#0A2640",
        position: "relative",
        color: "white",
      }}
    >
      <Container
        sx={{
          position: "relative",
          zIndex: 700,
          textAlign: { xs: "center", md: "left" },
          paddingX: { md: "10vw", lg: 0 },
        }}
      >
        <Grid container gap={{xs: 7, md: 0}} alignItems={"center"}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                width: 567,
                maxWidth: "100%",
                marginX: { xs: "auto", md: 0 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--manrope)",
                  fontWeight: 400,
                  fontSize: { xs: "40px", lg: "48px" },
                  lineHeight: "72px",
                }}
                variant="body1"
              >
                Save time by building fast with Boldo Template
              </Typography>

              <Typography
                sx={{
                  margin: "16px 0 40px 0",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "28px",
                  fontFamily: "var(--openSan)",
                }}
              >
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </Typography>

              <Stack
                direction={{xs: "column", sm: "row"}}
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

                <SecondaryButton text="Explore" color="white" border="white" />
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                margin: "0 auto",
                maxWidth: "100%",
                width: "494px",
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
          <Slider />
        </Box>
      </Container>

      {/* */}
    </Box>
  );
};

export default Hero;
