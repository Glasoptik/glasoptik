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
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
  };
  return (
    <div className="px-5 sm:px-[74px]">
      <Slider ref={(c) => (slider = c)} {...settings}>
        {sliders.map(({ image, image_title }, idx) => (
          <div className="w-full" key={idx}>
            <GatsbyImage
              key={idx}
              image={image.gatsbyImageData}
              alt={image_title.text}
              objectFit="cover"
              className="w-full h-[545px]"
            />
          </div>
        ))}
      </Slider>

      <div className="w-full flex flex-1 items-center justify-between text-[10px] leading-3 mt-1 mb-[120px]">
        <h6 className="flex-[0.33]">{sliders[activeSlide].image_title.text}</h6>
        <h6 className="flex-[0.33] text-center">
          {activeSlide + 1}/{sliders.length}
        </h6>
        <div className="space-x-[60px] flex items-center flex-[0.33] justify-end">
          <button onClick={() => slider.slickPrev()}>
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
          <button onClick={() => slider.slickNext()}>
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
  );
};

export default Hero;
