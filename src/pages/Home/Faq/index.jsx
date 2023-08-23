import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import workstation from "../../../assets/workstation.jpg";
import { CaretCircleDown } from "@phosphor-icons/react";

const FaqSection = () => {
  const faqData = [
    "We connect our customers with the best?",
    "Android research & development rockstar?",
  ];

  return (
    <>
      <Container
        sx={{
          maxWidth: { lg: "100%" },
          padding: { xs: "80px 20px", lg: "124px  150px 79px  150px" },
        }}
      >
        <Box
          component="div"
          sx={{
            marginBottom: "56px",
            height: 403,
            borderRadius: "24px",
            backgroundImage: `url(${workstation})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>

        <Grid container columnSpacing={5}>
          <Grid item xs={12} md={6}>
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
          </Grid>

          <Grid item xs={12} md={6}>
            {faqData.map((el) => (
              <Accordion sx={{ boxShadow: "none" }} key={el}>
                <AccordionSummary
                  expandIcon={
                    <CaretCircleDown
                      color="var(--primaryColor)"
                      size={32}
                      weight="fill"
                    />
                  }
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--openSan)",
                      fontSize: { xs: "14px", sm: "20px" },
                      fontWeight: 400,
                      lineHeight: { xs: "28px", sm: "32px" },
                    }}
                  >
                    {el}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FaqSection;
