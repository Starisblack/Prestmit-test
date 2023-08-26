import { Box, Container, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@phosphor-icons/react";
import { guyCalling, barChart } from "../../../assets/service";
import { styles } from "../../../globalStyles";
import Animation from "../../../utils/animation";

const featureOneStyling = {
  imgBox: {
    width: "494px",
    maxWidth: "100%",
    margin: { xs: "0 auto", md: 0 },
    height: "506px",
    borderRadius: "24px",
    backgroundImage: `url(${guyCalling})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },

  floatingBox: {
    borderRadius: "12px",
    boxShadow: "0px 4px 32px 0px #0000001F",
    width: 171,
    padding: "40px",
    backgroundColor: "white",
    position: "absolute",
    right: "57px",
    bottom: "-104px",
  },
};

const FeatureOne = () => {
  const serviceDetail = [
    "We connect our customers with the best.",
    "Advisor success customer launch party.",
    "Business-to-consumer long tail.",
  ];

  return (
    <>
      <Container
        sx={{
          maxWidth: { lg: "100%" },
          padding: { xs: "80px 20px", md: "185px  107px 112px  156px" },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={{ xs: "150px" }}
        >
          <Box sx={featureOneStyling.imgBox}>
            <Box component="div" sx={featureOneStyling.floatingBox}>
              <Animation type="fade-up" data-aos-duration="1000">
                <Box sx={{ width: 170, height: 227 }}>
                  <img src={barChart} />
                </Box>
                <Typography
                  sx={{
                    marginTop: "19px",
                    fontFamily: "var(--manrope)",
                    color: "var(--primaryColor)",
                    fontWeight: 700,
                    fontSize: { xs: "16px", sm: "24px" },
                    lineHeight: "36px",
                  }}
                >
                  30%
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "var(--manrope)",
                    color: "var(--primaryColor)",
                    fontWeight: 400,
                    fontSize: { xs: "10px", sm: "14px" },
                    lineHeight: "36px",
                  }}
                >
                  More income in June
                </Typography>
              </Animation>
            </Box>
          </Box>

          <Box sx={{ width: "493px", maxWidth: "100%" }}>
            <Typography
              sx={{
                ...styles.header2,
                marginBottom: "40px",
              }}
            >
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Typography>
            <Stack spacing={3}>
              {serviceDetail.map((el) => (
                <Stack
                  key={el}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={3.3}
                >
                  <CheckCircle
                    size={24}
                    weight="fill"
                    color="var(--primaryColor)"
                  />
                  <Typography sx={styles.textS}>{el}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default FeatureOne;
