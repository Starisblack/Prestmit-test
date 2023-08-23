import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

const BlogCard = ({ desc, contentImg, profileImg, name }) => {
  return (
    <>
      <Stack sx={{ width: 300, fontWeight: 400, textAlign: "left" }}>
        <Box
          sx={{
            height: 209,
            borderRadius: "12px",
            backgroundImage: `url(${contentImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
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
                  fontFamily: "var(--openSan)",
                  fontSize: { xs: "14px", sm: "20px" },

                  color: "var(--primaryColor)",
                }}
              >
                Category
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "16px" },
                  color: "gray",
                  fontFamily: "var(--openSan)",
                }}
              >
                November 22, 2021
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontFamily: "var(--openSan)",
                fontSize: { xs: "14px", sm: "20px" },
                lineHeight: "32px",
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
