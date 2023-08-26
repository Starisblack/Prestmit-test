import { Box, Container, Stack, Typography } from "@mui/material";
import { PrimaryButton } from "../Buttons";
import ctaImg from "../../assets/ellipse.png";
import { styles } from "../../globalStyles";
import { CTAStyles } from "./CTAStyles";
import Animation from "../../utils/Animation";

const CTASection = () => {
  return (
    <>
      <Animation type={"zoom-in"} data-aos-duration="1500">
        <Box sx={{ paddingBottom: "84px" }}>
          <Container sx={CTAStyles.CTA_Container}>
            <Box
              sx={{
                ...CTAStyles.bgEllipse,
                backgroundImage: `url(${ctaImg})`,
              }}
            ></Box>
            <Typography
              sx={{
                ...styles.header,
                position: "relative",
                zIndex: 100,
                margin: "0 auto",
              }}
            >
              An enterprise template to ramp up your company website
            </Typography>
            <Stack
              spacing={{ xs: "10px", md: "24px" }}
              gap={{ xs: 3, lg: 0 }}
              direction="row"
              sx={CTAStyles.inputField}
            >
              <input
                type="email"
                className="email-input"
                placeholder="Your email address"
              />
              <PrimaryButton
                text="Start now"
                bgColor="#65E4A3"
                color="#0A2640"
              />
            </Stack>
          </Container>
        </Box>
      </Animation>
    </>
  );
};

export default CTASection;
