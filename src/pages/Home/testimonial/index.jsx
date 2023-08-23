import { Container, IconButton, Stack, Typography } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const Testimonial = () => {
  return (
    <>
      <Container
        sx={{
          bgcolor: "var(--primaryColor)",
          maxWidth: { lg: "100%" },
          
          color: "white",
          padding: { xs: "80px 20px", lg: "96px  156px 96px  96px" },
        }}
      >
      <Stack direction={"row"} justifyContent="space-between">
        <Typography
          sx={{
            fontFamily: "var(--manrope)",
            fontSize: "48px",
            fontWeight: 400,
            lineHeight: "72px",
            width: "65%"
          }}
        >
          An enterprise template to ramp up your company website
        </Typography>

        <Stack direction="row" spacing={3.5} alignSelf={"flex-end"}>
            <IconButton sx={{backgroundColor: "white", width: 72, height: 72}}>
             <ArrowRight color="#0A2640" size={32} />
            </IconButton>

            <IconButton sx={{backgroundColor: "white", width: 72, height: 72}}>
             <ArrowLeft color="#0A2640" size={32} />
            </IconButton>
        </Stack>

        </Stack>
      </Container>
    </>
  );
};

export default Testimonial;
