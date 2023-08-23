import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { boldo, presto } from "../../assets/hero";

const Slider = () => {
  const logos = [boldo, presto, boldo, presto, boldo, presto, boldo, presto, boldo, presto, boldo, presto, boldo, presto, boldo, presto];
  return (
    <>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={6}
        spaceBetween={10}
        speed="1000"
        loop={true}
        autoplay={{
          delay: 300,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {logos.map((logo, index) => {
          return <SwiperSlide key={index}>
            <img style={{objectFit: "contain",  width: "145px", height: "42px"}} src={logo} alt="prestmit-partner"/>
          </SwiperSlide>;
        })}

        {/* <SwiperSlide>Slide 1</SwiperSlide>
        
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Slider;
