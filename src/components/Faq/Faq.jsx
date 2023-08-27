import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import workstation from "../../assets/workstation.jpg";
import { CaretCircleDown } from "@phosphor-icons/react";
import { styles } from "../../globalStyles";

const FAQSection = () => {
  const faqData = [
    "We connect our customers with the best?",
    "Android research & development rockstar?",
  ];

  return (
    <>
      <Container
        sx={{
          maxWidth: { lg: 1400 },
          padding: { xs: "80px 20px", lg: "124px  150px 59px  150px" },
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

        <Grid container spacing={{md: 12.5}}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                ...styles.header2,
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
                  <Typography sx={styles.textS}>{el}</Typography>
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

export default FAQSection;