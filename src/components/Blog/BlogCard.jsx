import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { styles } from "../../globalStyles";
import Animation from "../../utils/Animation";

const BlogCard = ({ desc, contentImg, profileImg, name }) => {
  // blog card styling

  const blogCardStyling = {
    card: {
      width: 300,
      fontWeight: 400,
      textAlign: "left",
    },
    contentImg: {
      height: 209,
      borderRadius: "12px",
      backgroundImage: `url(${contentImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    cardTitle: {
      fontFamily: "var(--openSan)",
      fontSize: { xs: "14px", sm: "16px" },
    },
  };

  return (
    <>
      <Animation type="fade-up" data-aos-duration="2000">
        <Stack sx={blogCardStyling.card}>
          <Box sx={blogCardStyling.contentImg}></Box>
          <Stack justifyContent={"space-between"} flexGrow={1}>
            <Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={"12px"}
                sx={{ marginTop: "24px", marginBottom: "12px" }}
              >
                <Typography
                  sx={{
                    ...blogCardStyling.cardTitle,
                    fontWeight: 700,
                    color: "var(--primaryColor)",
                  }}
                >
                  Category
                </Typography>
                <Typography sx={blogCardStyling.cardTitle}>
                  November 22, 2021
                </Typography>
              </Stack>
              <Typography
                sx={{
                  ...styles.textS,
                  lineHeight: { sm: "32px" },
                  color: "var(--primaryColor)",
                  marginBottom: "20px",
                }}
              >
                {desc}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={"12px"} alignItems={"center"}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  backgroundImage: `url(${profileImg})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  borderRadius: "58px",
                }}
              ></Box>
              <Stack>
                <Typography
                  sx={{
                    fontFamily: "var(--openSan)",
                    color: "var(--primaryColor)",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "28px",
                  }}
                >
                  {name}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Animation>
    </>
  );
};

BlogCard.propTypes = {
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  contentImg: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
};

export default BlogCard;
