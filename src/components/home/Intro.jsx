import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";

const Intro = ({ intro, onClick, open }) => {
  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      className={`fixed w-screen h-screen top-0 left-0 z-50 overflow-hidden transform transition-all duration-200 bg-white ${
        !open ? "hidden" : "block"
      } cursor-pointer`}
    >
      <div className="max-w-full w-screen h-screen relative">
        <Slider {...settings}>
          {intro.images.map(({ image }, idx) => (
            <GatsbyImage
              key={idx}
              image={image.gatsbyImageData}
              alt={image.alt}
              objectFit="cover"
              className="w-full h-full"
            />
          ))}
        </Slider>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            type="button"
            onClick={onClick}
            className="text-[17px] uppercase border-[0.75px] border-solid border-black bg-transparent hover:bg-white 
          hover:border-white py-[18px] px-[21px] transition-colors duration-200 ease-linear"
          >
            {intro.button_text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
