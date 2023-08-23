import { Container, Grid, Typography } from "@mui/material";
import { feature1, feature2, feature3 } from "../../../assets/service";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceList = [
    { id: 1, img: feature1, title: "Cool feature title" },

    { id: 2, img: feature2, title: "Even cooler feature" },

    { id: 3, img: feature3, title: "Cool feature title" },
  ];
  return (
    <>
      <Container
        sx={{
          maxWidth: { lg: "100%" },
          textAlign: "center",
          paddingTop: "84px",
          paddingBottom: "120px",
          paddingX: { md: "10vw", lg: "150px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--openSan)",
            fontWeight: 400,
            lineHeight: "32px",
            color: "#777",
          }}
        >
          Our Services
        </Typography>
        <Typography
          sx={{
            width: { xs: "95%", sm: "80%" },
            fontFamily: "var(--manrope)",
            fontSize: { xs: "20px", sm: "35px", md: "48px" },
            fontWeight: 400,
            lineHeight: { xs: "45px", md: "72px" },
            margin: "0 auto",
          }}
        >
          Handshake infographic mass market crowdfunding iteration.
        </Typography>
        <Grid container justifyContent={{xs: "center", lg: "flex-start"}} gap={{xs: "40px", lg: "100px"}} sx={{ marginTop: "80px" }}>
          {serviceList.map((el) => (
            <Grid key={el.id} item xs={12} sm={5} md={4} lg={3}>
              <ServiceCard img={el.img} title={el.title} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Services;
