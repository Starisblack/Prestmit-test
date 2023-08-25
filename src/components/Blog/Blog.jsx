import { Container, Stack, Typography } from "@mui/material";
import BlogCard from "./BlogCard";
import { feature1 } from "../../assets/service";
import {
  category2,
  category3,
  chandler,
  monica,
  rachel,
} from "../../assets/blog";
import { SecondaryButton } from "../Buttons";
import { styles } from "../../globalStyles";

// styling for blog section

const BlogStyling = {
  blogContainer: {
    maxWidth: { lg: "100%" },
    textAlign: "center",
    paddingTop: "84px",
    padding: { xs: "80px 20px", lg: "79px  201px 124px  201px" },
  },

  blog_list_container: {
    justifyContent: "center",
    flexWrap: { xs: "wrap", md: "nowrap" },
    gap: { xs: "70px", md: 0 },
    marginTop: "79px",
    marginBottom: "84px",
  },
};

const Blog = () => {
  const blogData = [
    {
      id: 1,
      bgImg: feature1,
      prfileImg: chandler,
      content: "Pitch termsheet backing validation focus release.",
      name: "Chandler Bing",
    },
    {
      id: 2,
      bgImg: category2,
      prfileImg: rachel,
      content:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      name: "Rachel Green",
    },

    {
      id: 3,
      bgImg: category3,
      prfileImg: monica,
      content:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      name: "Monica Geller",
    },
  ];
  return (
    <>
      <Container sx={BlogStyling.blogContainer}>
        <Typography
          sx={{
            ...styles.subHeader,
            color: "#777",
          }}
        >
          Our Blog
        </Typography>
        <Typography
          sx={{
            ...styles.header,
            width: { xs: "95%", sm: "90%" },
            margin: "0 auto",
          }}
        >
          Value proposition accelerator product management venture
        </Typography>

        {/* blog lists section */}

        <Stack
          direction="row"
          spacing={{ md: 6.25 }}
          sx={BlogStyling.blog_list_container}
        >
          {blogData.map((el) => (
            <BlogCard
              key={el.id}
              name={el.name}
              profileImg={el.prfileImg}
              contentImg={el.bgImg}
              desc={el.content}
            />
          ))}
        </Stack>

        <SecondaryButton text="Load more" border="#0A2640" color="#0A2640" />
      </Container>
    </>
  );
};

export default Blog;
