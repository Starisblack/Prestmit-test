import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { styles } from "../../globalStyles";
import { arrow } from "../../assets/service";
import PropTypes from "prop-types";
import Animation from "../../utils/animation";

const ServiceCard = ({ img, title }) => {
  const btnStyling = {
    fontFamily: "var(--openSan)",
    fontSize: { xs: "12px", sm: "20px" },
    lineHeight: "36px",
    fontWeight: 700,
    color: "var(--primaryColor)",
  };

  return (
    <>
      <Animation data-aos-duration="700" type={"slide-up"}>
        <Box
          sx={{
            width: { xs: 300, sm: "100%" },
            maxWidth: "100%",
            textAlign: "left",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              height: { xs: 300, md: 354 },
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></Box>

          <Typography
            sx={{ ...styles.textM, marginTop: { xs: "16px", sm: "24px" } }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              ...styles.textS,
              color: "#777777",
              marginTop: { sm: "12px" },
              marginBottom: { sm: "28px" },
              width: { xs: "90%", sm: "100%" },
            }}
          >
            Learning curve network effects return on investment.
          </Typography>

          <Stack sx={{ width: 170 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ cursor: "pointer" }}
            >
              <Typography sx={btnStyling}>Explore page</Typography>
              <IconButton sx={{ padding: 0.2 }}>
                <img src={arrow} alt="arrow" />
              </IconButton>
            </Stack>
            <Divider
              sx={{ backgroundColor: "var(--primaryColor)", marginTop: 1 }}
            />
          </Stack>
        </Box>
      </Animation>
    </>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
