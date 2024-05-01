import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "../style/slider.module.css";
import data from "../utils/data_slider_them";

export default function ThemesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={s.container}>
      <h2>TRENDING CATEGORIES</h2>
      <div className={s.carousel_container}>
        {" "}
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className={s.info_container}>
              <img src={item.image} alt={`Slide ${index + 1}`} />
              <p>{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
