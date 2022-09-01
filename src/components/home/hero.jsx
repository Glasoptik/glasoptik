import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = ({ sliders }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  let slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    cssEase: "linear",
    beforeChange: (current, next) => setActiveSlide(next),
  };
  return (
    <div className="w-full sm:border-b border-solid border-b-black mt-[105px] md:mt-40">
      <div className="max-w-[1440px] w-full mx-auto px-[13px] sm:px-[74px]">
        <Slider ref={(c) => (slider = c)} {...settings}>
          {sliders.map(({ image, mobile_image, image_title }, idx) => (
            <div className="w-full" key={idx}>
              <GatsbyImage
                key={idx}
                image={image.gatsbyImageData}
                alt={image_title.text}
                objectFit="cover"
                className="hidden sm:block w-full h-[545px]"
              />
              <GatsbyImage
                key={idx + 1}
                image={mobile_image.gatsbyImageData}
                alt={image_title.text}
                objectFit="cover"
                className="block sm:hidden w-full h-[345px]"
              />
            </div>
          ))}
        </Slider>

        <div className="w-full flex flex-wrap flex-1 items-center justify-between text-[10px] leading-3 mt-1 sm:mb-[120px]">
          <h6 className="flex-[0.5] sm:flex-[0.33] max-w-[100px] md:max-w-full">
            {sliders[activeSlide].image_title.text}
          </h6>
          <h6 className="flex-[0.5] sm:flex-[0.33] text-center sm:text-center max-w-[100px] md:max-w-full">
            {activeSlide + 1}/{sliders.length}
          </h6>
          <div className="flex sm:space-x-[60px] items-center sm:flex-[0.33] justify-end">
            <button
              className="hidden sm:flex"
              onClick={() => slider.slickPrev()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="7"
                viewBox="0 0 76 7"
              >
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                  <g
                    fill="#000"
                    fillRule="nonzero"
                    transform="translate(-1156 -730)"
                  >
                    <g transform="translate(1156.5 732.5)">
                      <path d="M6.611-2.25v3H75.25v.5H6.611v3l-7-3.25 7-3.25z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <button
              className="max-w-[120px] w-full md:max-w-fit"
              onClick={() => slider.slickNext()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="7"
                viewBox="0 0 76 7"
              >
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                  <g
                    fill="#000"
                    fillRule="nonzero"
                    transform="translate(-1291 -730)"
                  >
                    <g transform="translate(1156.5 732.5)">
                      <path d="M203.389-2.25l7 3.25-7 3.25-.001-3H134.75v-.5h68.638v-3z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
