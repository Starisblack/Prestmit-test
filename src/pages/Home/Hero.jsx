import { Box, Grid, Stack, Typography } from "@mui/material";
import { heroImg } from "../../assets/hero";
import MainButton from "../../components/MainButton";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        paddingTop: "162px",
        backgroundColor: "#0A2640",
        position: "relative",
        color: "white",
      }}
    >
      {/* <Box sx={{position: "absolute", bgcolor: "#1C3D5B", width: "1293px", height: "1293px"}}>

    </Box> */}

      <Grid container spacing={4}   paddingX={{xs: "5vw", md: "100px"}} alignItems={"center"}>
        <Grid item xs={12} md={7}>
          <Box sx={{width: 567, maxWidth: "100%", paddingRight: 4 }}>
          <Typography
            sx={{fontFamily: "var(--manrope)", fontWeight: 400, fontSize: {xs: "40px", lg: "48px"}, lineHeight: "72px" }}
            variant="body1"
          >
            Save time by building fast with Boldo Template
          </Typography>

          <Typography
            sx={{margin:"16px 0 40px 0", fontWeight: 400, fontSize: "16px", lineHeight: "28px" }}
          >
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </Typography>

          <Stack direction="row" spacing={3} marginTop={"40px"}>
            <MainButton
              text="Buy template"
              color="var(--primaryColor)"
              bgColor={"#69E6A6"}
              // lineHeight={"28px"}
              radius={"56px"}
              padding={"16px 56px"}
              fSize={"20px"}
            />

            <MainButton
              text="Explore"
              color="white"
              border={`2px solid white`}
              // lineHeight={"28px"}
              radius={"56px"}
              padding={"16px 56px"}
              fSize={"20px"}
              variant={"outlined"}
            />
          </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={{margin: "0 auto", maxWidth: "100%", width: "494px", height: "423px" }}>
            <img src={heroImg} alt="prestmit-hero-img" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
