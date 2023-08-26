import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { DotOutline } from "@phosphor-icons/react";
import { styles } from "../../../globalStyles";
import { FeatureTwoStyles } from "./FeatureTwoStyles";
import {
  eye,
  feather,
  pieGraph,
  sun,
  girlCalling,
} from "../../../assets/service";
import Animation from "../../../utils/Animation";
import useResponsive from "../../../hooks/useResponsive";

const FeatureTwo = () => {

  const isMobile = useResponsive("down", "sm")
  const pieChartData = [
    {
      color: "#0DBBFC",
      title: "35% - Agile Development",
    },
    {
      color: "#69E6A6",
      title: "30% -  Investor bandwidth",
    },
    {
      color: "#000000",
      title: "35% -  A/B testing ",
    },
  ];

  const featureTags = [
    {
      id: 1,
      title: "We connect our customers with the best.",
      icon: feather,
    },
    {
      id: 2,
      title: "Advisor success customer launch party.",
      icon: eye,
    },
    {
      id: 3,
      title: "Business-to-consumer long tail.",
      icon: sun,
    },
  ];

  return (
    <>
      <Container sx={FeatureTwoStyles.sectionContainer}>
        <Grid
          width={{xs: "100%", sm: "70%", md: "100%"}}
          sx={{
            marginX: "auto"
          }}
          direction={{xs: "column-reverse", md: "row"}}
          container
          justifyContent={{xs: "center", md: "space-between"}}
          alignItems={{md: "flex-end"}}
        >
          {/* left feature two container */}
          <Grid item xs={4} md={5.45}>
            <Box sx={FeatureTwoStyles.leftBox}>
              <Typography sx={{ ...styles.header2, marginBottom: "40px" }}>
                We connect our customers with the best, and help them keep
                up-and stay open.
              </Typography>
              <Stack spacing={1.75}>
                {featureTags.map((el) => (
                  <Animation
                    type="fade-up"
                    data-aos-duration="1000"
                    key={el.id}
                  >
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={1.75}
                      sx={{
                        backgroundColor:
                          el.id !== 1 ? "white" : "var(--primaryColor)",
                        color: el.id !== 1 ? "black" : "white",
                        ...FeatureTwoStyles.featureTags,
                      }}
                    >
                      <Box sx={{ height: 24, width: 24 }}>
                        <img src={el.icon} alt={el.title} />
                      </Box>
                      <Typography sx={styles.title}>{el.title}</Typography>
                    </Stack>
                  </Animation>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* feature two right content */}
          <Grid item xs={5.92} md={4.84}>
            <Box
              sx={{
                ...FeatureTwoStyles.imgBox,
                backgroundImage: `url(${girlCalling})`,
              }}
            >
              <Box component="div" sx={FeatureTwoStyles.floatingBox}>
                <Animation type={"zoom-up"} data-aos-duration="1500">
                  <Box
                    sx={{
                      width: 173,
                      height: 173,
                      marginBottom: "22px",
                      margin: "0 auto",
                    }}
                  >
                    <img src={pieGraph} alt="pie chart" />
                  </Box>

                  <Stack spacing={1.5} marginTop={2.8}>
                    {pieChartData.map((el) => (
                      <Stack
                        key={el.title}
                        direction={"row"}
                        alignItems={"center"}
                        spacing={0.5}
                      >
                        <DotOutline color={el.color} size={isMobile ? 24 : 32} weight="fill" />
                        <Typography
                          sx={{
                            fontFamily: "var(--manrope)",
                            fontWeight: 400,
                            fontSize: { xs: "11px", lg: "14px" },
                            lineHeight: { xs: "normal", lg: "36px" },
                          }}
                        >
                          {el.title}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Animation>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          // spacing={{ xs: "210px", md: 0 }}
        ></Stack>
      </Container>
    </>
  );
};

export default FeatureTwo;
