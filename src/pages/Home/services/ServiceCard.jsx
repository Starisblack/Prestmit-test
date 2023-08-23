import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { arrow } from "../../../assets/service";

const ServiceCard = ({ img, title }) => {
  return (
    <>
      <Box sx={{width: 300, maxWidth: "100%", textAlign: "left" }}>
        <Box sx={{ height: 354}}>
          <img  src={img} />
        </Box>

        <Typography
          sx={{
            marginTop: {xs: "16px", sm: "24px"},
            fontFamily: "var(--openSan)",
            fontSize: { xs: "16px", sm: "24px" },
            lineHeight: "36px",
            fontWeight: 400,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "var(--openSan)",
            fontSize: { xs: "12px", sm: "20px" },
            lineHeight: "32px",
            fontWeight: 400,
            color: "#777777",
            marginTop: {sm: "12px"},
            marginBottom: {sm: "28px"},
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
            <Typography
              sx={{
                fontFamily: "var(--openSan)",
                fontSize: { xs: "12px", sm: "20px" },
                lineHeight: "36px",
                fontWeight: 700,
                color: "var(--primaryColor)",
              }}
            >
              Explore page
            </Typography>
            <IconButton>
              <img src={arrow} alt="arrow" />
            </IconButton>
          </Stack>
          <Divider sx={{ backgroundColor: "var(--primaryColor)" }} />
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
