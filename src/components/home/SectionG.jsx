import { GatsbyImage } from "gatsby-plugin-image";
import React, { useRef, useState } from "react";
import Slider from "react-slick";

const SectionG = ({ sectiong }) => {
  const data = sectiong.document.data;
  const [activeSlide, setActiveSlide] = useState(0);
  let gallery = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    beforeChange: (current, next) => setActiveSlide(next),
  };
  return (
    <div className="w-full relative mb-[150px]">
      <div className="max-w-[1440px] w-full mx-auto">
        <h2 className="ml-16 text-[190px] leading-5 font-thin italic mt-[30px] uppercase">
          {data.title.text}
        </h2>
      </div>
      <div className="mt-[33px] w-screen bg-[#57C65F] h-[1052px] flex flex-col justify-center">
        <div className="max-w-5xl w-full flex items-center justify-between mx-auto">
          <button onClick={() => gallery.slickPrev()}>
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
          <Slider
            ref={(c) => (gallery = c)}
            {...settings}
            className="max-w-[811px] max-h-[740px] w-full h-full"
          >
            {data.images.map((image, idx) => (
              <GatsbyImage
                key={idx}
                image={image.image.gatsbyImageData}
                alt={image.image.alt}
                objectFit="contain"
                className="max-w-[811px] max-h-[740px] w-full h-full"
              />
            ))}
          </Slider>
          <button onClick={() => gallery.slickNext()}>
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
        <span className="mx-auto text-[15px] leading-[17px] mt-4">
          {activeSlide + 1} / {data.images.length}
        </span>
      </div>
    </div>
  );
};

export default SectionG;
