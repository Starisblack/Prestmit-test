import { Container, Grid, Typography } from "@mui/material";
import { feature1, feature2, feature3 } from "../../assets/service";
import { styles } from "../../globalStyles";
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
          paddingX: { md: "10vw", lg: "150px" },
        }}
      >
        <Typography sx={styles.subHeader}>Our Services</Typography>
        <Typography sx={styles.header}>
          Handshake infographic mass market crowdfunding iteration.
        </Typography>

        {/* services grid */}
        <Grid
          container
          justifyContent={{ xs: "center", lg: "flex-start" }}
          gap={{ xs: "70px", sm: "50px", lg: "80px" }}
          sx={{ marginTop: "80px" }}
        >
          {serviceList.map((el) => (
            <Grid key={el.id} item xs={12} sm={5} md={4} lg={3.3}>
              <ServiceCard img={el.img} title={el.title} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Services;
