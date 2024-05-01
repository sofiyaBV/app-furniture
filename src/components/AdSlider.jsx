import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../utils/data_adSlider";
import s from "../style/adSlider.module.css";

export default function AdSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div>
      <div>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <div className={s.info_container_ad}>
                <img src={item.image} alt={`Slide ${index + 1}`} />
                <div className={s.container_txt}>
                  <h2>{item.txt}</h2>
                  <button>SHOP NOW</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
