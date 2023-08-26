import { IconButton } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import PropTypes from "prop-types";

const TestimonialSlider = ({ children, leftRef, rightRef, isDesktop }) => {


  const navigationBtnStyling = {
    boxShadow: "0px 4px 32px 0px rgba(0, 0, 0, 0.08)",
    backgroundColor: "white",
    ":hover": { backgroundColor: "white", opacity: 0.8 },
    width: { xs: 42, sm: 72 },
    height: { xs: 42, sm: 72 },
  };

  const properties = {
    prevArrow: (
      <IconButton  ref={leftRef} sx={{...navigationBtnStyling, display: isDesktop ? "none" : "inline-flex"}}>
        <ArrowLeft color={"#0A2640"} size={32} />
      </IconButton>
    ),
    nextArrow: (
      <IconButton ref={rightRef} sx={{...navigationBtnStyling, display: isDesktop ? "none" : "inline-flex"}}>
        <ArrowRight color={"#0A2640"} size={32} />
      </IconButton>
    ),
  };

  const responsiveSettings = [

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
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
       cssClass="swiper-test"
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
  leftRef: PropTypes.object,
  rightRef: PropTypes.object,
  isDesktop: PropTypes.bool,
};
