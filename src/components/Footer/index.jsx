import { Container, Grid, Link, Stack, Typography } from "@mui/material";
import Logo from "../Logo";

const Footer = () => {
  const footerData = ["Landings", "Company", "Resources"];

  return (
    <Container
      sx={{
        color: "gray",
        maxWidth: { lg: "100%" },
        padding: { xs: "80px 20px", lg: "100px  179px 117px  100px" },
      }}
    >
      <Grid container spacing={22}>
        <Grid item lg={4.5}>
          <Logo footer={true} />
          <Typography
            sx={{
              fontFamily: "var(--openSan)",
              marginTop: "40px",
              fontSize: { xs: "12px", sm: "16px" },
              fontWeight: 400,
              
            }}
          >
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </Typography>
        </Grid>
        <Grid item lg={7.5}>
          <Grid container spacing={12}>
            <Grid item lg={4}>
              <Typography
                sx={{
                  marginBottom: "32px",
                  fontFamily: "var(--openSan)",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "black"
                }}
              >
                Landings
              </Typography>
              <Stack spacing={3}>
                {["home", "Products", "Services"].map((el) => (
                  <Link
                    sx={{
                      textDecoration: "none",
                      fontFamily: "var(--openSan)",
                      fontSize: "20px",
                      color: "gray",
                    }}
                    key={el}
                  >
                    {el}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item lg={4}>
              Company
            </Grid>
            <Grid item lg={4}>
              Resoures
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography sx={{
             fontFamily: "var(--openSan)",
                      fontSize: "16px",
                     
          }}>All rights reserved.</Typography>
    </Container>
  );
};

export default Footer;
