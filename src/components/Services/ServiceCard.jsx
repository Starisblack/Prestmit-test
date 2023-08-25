import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { styles } from "../../globalStyles";
import { arrow } from "../../assets/service";
import PropTypes from "prop-types";

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
      <Box
        sx={{
          width: 300,
          maxWidth: "100%",
          textAlign: "left",
          margin: "0 auto",
        }}
      >
        <Box sx={{ height: 354 }}>
          <img src={img} />
        </Box>

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
    </>
  );
};

export default ServiceCard;


ServiceCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };