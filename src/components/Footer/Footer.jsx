import {
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Logo from "../Logo";

const Footer = () => {
  const footerData = [
    { title: "Landings", list: ["Home", "Products", "Services"] },
    { title: "Company", list: ["Home", "Careers", "Services"] },
    { title: "Resources", list: ["Blog", "Products", "Services"] },
  ];

  return (
    <Container
      sx={{
        color: "gray",
        maxWidth: { lg: 1400 },
        padding: { xs: "80px 20px", lg: "100px  179px 117px  100px" },
      }}
    >
      <Grid container gap={{xs: 5, sm: 0}} spacing={{sm: 0 , md: 10,  lg: 22}}>
        <Grid item md={4.5}>
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
        <Grid item xs={12} md={7.5}>
          <Grid container spacing={{xs: 4, md: 6, lg: 12}}>
            {footerData.map((el) => (
              <Grid item xs={4} md={4} key={el.title}>
                <Typography
                  sx={{
                    marginBottom: "32px",
                    fontFamily: "var(--openSan)",
                    fontSize: {xs: "12px", sm: "20px"},
                    fontWeight: 700,
                    color: "black",
                  }}
                >
                  {el.title}
                </Typography>
                <Stack spacing={3}>
                  {el.list.map((el) =>
                    el === "Careers" ? (
                      <Stack key={el} direction="row" spacing={1.2}>
                        <Link
                          sx={{
                            textDecoration: "none",
                            fontFamily: "var(--openSan)",
                            fontSize:{xs: "12px", sm: "20px"},
                            color: "gray",
                            cursor: "pointer",
                          }}
                        >
                          {el}
                        </Link>
                        <Button
                          sx={{
                            fontFamily: "var(--openSan)",
                            borderRadius: "120px",
                            padding: {xs: "1px 8px", sm: "1px 14px"},
                            color: "#0A2640",
                            bgcolor: "#65E4A3",
                            fontSize: {xs: "9px", sm: "13px"},
                            textTransform: "inherit",
                          }}
                        >
                          Hiring!
                        </Button>
                      </Stack>
                    ) : (
                      <Link
                        key={el}
                        sx={{
                          textDecoration: "none",
                          cursor: "pointer",
                          fontFamily: "var(--openSan)",
                          fontSize: {xs: "12px", sm: "20px"},
                          color: "gray",
                        }}
                      >
                        {el}
                      </Link>
                    )
                  )}
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Typography
        sx={{
          fontFamily: "var(--openSan)",
          fontSize: {xs: "12px", sm:"16px"},
          marginTop: {xs: "20px", md: 0}
        }}
      >
        All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
