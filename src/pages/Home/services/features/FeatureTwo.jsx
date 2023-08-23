import { Box, Container, Stack, Typography } from "@mui/material";
import { DotOutline } from "@phosphor-icons/react";
import {
  eye,
  feather,
  girlCalling,
  pieGraph,
  sun,
} from "../../../../assets/service";

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
      <Container
        sx={{
          maxWidth: { lg: "100%" },
          padding: { xs: "80px 20px", md: "112px  150px 224px  150px" },
        }}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={{ xs: "210px", md: "80px" , lg: "210px" }}
        >
          <Box sx={{ width: "493px", maxWidth: "100%" }}>
            <Typography
              sx={{
                fontFamily: "var(--manrope)",
                fontWeight: 400,
                fontSize: { xs: "25px", lg: "36px" },
                lineHeight: { xs: "35px", lg: "56px" },
                marginBottom: "40px",
              }}
            >
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
                    padding: "16px 22px",
                    borderRadius: "4px",
                    boxShadow: "0px 4px 32px 0px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <Box sx={{ height: 24, width: 24 }}>
                    <img src={el.icon} alt={el.title} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "var(--manrope)",
                      fontWeight: 400,
                      fontSize: { xs: "12px", sm: "16px" },
                      lineHeight: { xs: "normal", sm: "28px" },
                    }}
                  >
                    {el.title}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Box
            sx={{
              width: "444px",
              maxWidth: "100%",
              margin: { xs: "0 auto", md: 0 },
              height: "506px",
              borderRadius: "24px",
              backgroundImage: `url(${girlCalling})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <Box
              component="div"
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 4px 32px 0px #0000001F",
                width: { xs: 171, lg: 227 },
                padding: "32px",
                backgroundColor: "white",
                position: "absolute",
                left: "48px",
                bottom: "-169px",
              }}
            >
              <Box sx={{ width: { xs: 170, lg: 227 }, marginBottom: "22px" }}>
                <img src={pieGraph} />
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
