import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { styles } from "../../globalStyles";

const TestimonialCard = ({ content, img, name, title }) => {
  const cardStyling = {
    card: {
      height: "max-content",
      fontFamily: "var(--openSan)",
      width: 270,
      maxWidth: "100%",
      padding: { xs: "20px", sm: "40px" },
      borderRadius: "12px",
      bgcolor: "white",
      margin: "0 auto",
      boxShadow: "0px 12px 32px 0px rgba(0, 0, 0, 0.12)",
    },

    avatar: {
      width: 58,
      height: 58,
      backgroundImage: `url(${img})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      borderRadius: "58px",
    },
  };

  return (
    <Stack sx={cardStyling.card} spacing={5}>
      <Typography
        sx={{
          ...styles.textM,
          color: "black",
        }}
      >
        {content}
      </Typography>
      <Stack direction="row" spacing={2}>
        <Box sx={cardStyling.avatar}></Box>
        <Stack>
          <Typography
            sx={{
              color: "var(--primaryColor)",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "32px",
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              color: "var(--primaryColor)",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "32px",
            }}
          >
            {title}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TestimonialCard;

TestimonialCard.propTypes = {
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
