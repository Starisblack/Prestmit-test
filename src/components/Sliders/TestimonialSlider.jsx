import { IconButton } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import useResponsive from "../../hooks/useResponsive";
import PropTypes from "prop-types";

const TestimonialSlider = ({ children }) => {
  const isMobile = useResponsive("down", "sm");

  const navigationBtnStyling = {
    boxShadow: "0px 4px 32px 0px rgba(0, 0, 0, 0.08)",
    backgroundColor: { xs: "black", sm: "white" },
    ":hover": { backgroundColor: { xs: "black", sm: "white" }, opacity: 0.8 },
    width: { xs: 42, sm: 72 },
    height: { xs: 42, sm: 72 },
  };

  const properties = {
    prevArrow: (
      <IconButton sx={navigationBtnStyling}>
        <ArrowLeft color={isMobile ? "white" : "#0A2640"} size={32} />
      </IconButton>
    ),
    nextArrow: (
      <IconButton sx={navigationBtnStyling}>
        <ArrowRight color={isMobile ? "white" : "#0A2640"} size={32} />
      </IconButton>
    ),
  };

  const responsiveSettings = [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <>
      <Slide
        autoplay={false}
        {...properties}
        responsive={responsiveSettings}
        slidesToScroll={1}
        slidesToShow={2}
        infinite={true}
      >
        {children}
      </Slide>
    </>
  );
};

export default TestimonialSlider;

TestimonialSlider.propTypes = {
  children: PropTypes.node,
};
