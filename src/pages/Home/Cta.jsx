import { Box, Container, Stack, Typography } from "@mui/material";
import { PrimaryButton } from "../../components/Buttons";
import ctaImg from "../../assets/Ellipse.png";

const Cta = () => {
  return (
    <>
      <Box sx={{ paddingBottom: "84px", padding: {} }}>
        <Container
          sx={{
            position: "relative",
            width: { xs: "90%", lg: "100%" },
            color: "white",
            textAlign: "center",
            borderRadius: "12px",
            bgcolor: "var(--primaryColor)",
            padding: { xs: "60px 20px", sm: "80px 50px", lg: "72px  242px" },
          }}
        >
          <Box
            sx={{
              borderRadius: "12px",
              position: "absolute",
              backgroundImage: `url(${ctaImg})`,
              height: 260,
              width: 732,
              maxWidth: "100%",
              zindex: 50,
              right: 0,
              top: 0,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <Typography
            sx={{
              position: "relative",
              zIndex: 100,
              fontFamily: "var(--manrope)",
              fontSize: { xs: "20px", sm: "35px", md: "48px" },
              fontWeight: 400,
              lineHeight: { xs: "45px", md: "72px" },
              margin: "0 auto",
            }}
          >
            An enterprise template to ramp up your company website
          </Typography>
          <Stack
            spacing={{ xs: "10px", md: "24px" }}
            gap={{ xs: 3, lg: 0 }}
            direction="row"
            sx={{
              position: "relative",
              zIndex: 100,
              marginTop: "48px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <input
              type="email"
              className="email-input"
              placeholder="Your email address"
            />
            <PrimaryButton text="Start now" bgColor="#65E4A3" color="#0A2640" />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Cta;
