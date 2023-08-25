import { Box, Container, Stack, Typography } from "@mui/material";
import { DotOutline } from "@phosphor-icons/react";

import { styles } from "../../../globalStyles";
import { FeatureTwoStyles } from "./FeatureTwoStyles";
import { eye, feather, pieGraph, sun, girlCalling } from "../../../assets/service";

const FeatureTwo = () => {
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
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={{ xs: "210px", md: "80px", lg: "210px" }}
        >
          <Box sx={{ width: "493px", maxWidth: "100%" }}>
            <Typography sx={{ ...styles.header2, marginBottom: "40px" }}>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Typography>
            <Stack spacing={1.75}>
              {featureTags.map((el) => (
                <Stack
                  key={el.id}
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
              ))}
            </Stack>
          </Box>

          <Box
            sx={{
              ...FeatureTwoStyles.imgBox,
              backgroundImage: `url(${girlCalling})`,
            }}
          >
            <Box component="div" sx={FeatureTwoStyles.floatingBox}>
              <Box sx={{ width: { xs: 170, lg: 227 }, marginBottom: "22px" }}>
                <img src={pieGraph} alt="pie chart" />
              </Box>

              <Stack>
                {pieChartData.map((el) => (
                  <Stack
                    key={el.title}
                    direction={"row"}
                    alignItems={"center"}
                    spacing={0.5}
                  >
                    <DotOutline color={el.color} size={32} weight="fill" />
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
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default FeatureTwo;
