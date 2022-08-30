import React, { Fragment } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import Link from "../common/link";

const Intro = ({ intro, open }) => {
  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    easing: "linear",
    swipeToSlide: true,
    swipe: true,
    pauseOnHover: false,
  };
  return (
    <div
      className={`fixed w-screen h-screen top-0 left-0 z-50 overflow-hidden transform transition-all duration-200 bg-white`}
    >
      <div className="max-w-full w-screen h-screen relative">
        <Slider {...settings}>
          {intro.images.map(({ image, mobile_image }, idx) => (
            <Fragment key={idx}>
              <GatsbyImage
                image={image.gatsbyImageData}
                alt={image.alt}
                objectFit="cover"
                loading="eager"
                className="hidden sm:block w-full h-screen"
              />
              <GatsbyImage
                image={mobile_image.gatsbyImageData}
                alt={mobile_image.alt}
                objectFit="cover"
                loading="eager"
                className="block sm:hidden w-full h-screen"
              />
            </Fragment>
          ))}
        </Slider>
        <div className="absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link
            to="/glas"
            className="text-[17px] uppercase border-[0.75px] border-solid border-white/50 bg-white/50 sm:border-black sm:bg-transparent hover:sm:bg-white 
          hover:border-white py-[18px] px-[21px] transition-colors duration-200 ease-linear cursor-pointer"
          >
            {intro.button_text}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
