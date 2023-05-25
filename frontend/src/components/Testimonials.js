import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SwiperCore, {Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);

const slide_img = [
  {
    name: "Pinelo",
    image: require("../img/pinelo.jpg"),
    quote: "This is best and biggest unified platform for instant online admission. We can easily take admission for any course in any institute.."
  },
  {
    name: "Albert",
    image: require("../img/albert.jpg"),
    quote: "This is best and biggest unified platform for instant online admission. We can easily take admission for any course in any institute.."
  },
  {
    name: "Sylvie",
    image: require("../img/clarence.jpg"),
    quote: "This is best and biggest unified platform for instant online admission. We can easily take admission for any course in any institute.."
  },
  {
    name: "Moussa",
    image: require("../img/moussa.jpg"),
    quote: "This is best and biggest unified platform for instant online admission. We can easily take admission for any course in any institute.."
  },
  {
    name: "Salma",
    image: require("../img/veil-woman.JPG"),
    quote: "This is best and biggest unified platform for instant online admission. We can easily take admission for any course in any institute.."
  }
];

const Testimonials = () => {
  return (
    <div className="swiper-container">
      <h1>Voici ce que nos partenaires disent de nous</h1>
      <Swiper
        autoplay={{"delay": 3000}}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
                <div className="slider-container">
                  <div className="slider-p" >
                    <img src={img.image} alt="" />
                    <h4>___ {img.name}</h4>
                    <FontAwesomeIcon icon={faQuoteLeft} style={{color: "#fffff", fontSize: "4rem"}} />
                    <p>{img.quote}</p>
                  </div>
                </div>
              </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;