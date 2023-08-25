import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { boldo, presto } from "../../assets/hero";
import { Slide } from "react-slideshow-image";

const HeroSlider = () => {
  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ];

  const logos = [
    boldo,
    presto,
    boldo,
    presto,
    boldo,
    presto,
    boldo,
    presto,
    boldo,
    presto,
    boldo,
    presto,
    boldo,
    presto,
    boldo,
    presto,
  ];
  return (
    <>
      <Slide
        duration={300}
        transitionDuration={1000}
        responsive={responsiveSettings}
        slidesToScroll={1}
        slidesToShow={2}
        infinite={true}
        arrows={false}
      >
        {logos.map((logo, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                style={{ objectFit: "contain", width: "145px", height: "42px" }}
                src={logo}
                alt="prestmit-partner"
              />
            </SwiperSlide>
          );
        })}
      </Slide>
    </>
  );
};

export default HeroSlider;
