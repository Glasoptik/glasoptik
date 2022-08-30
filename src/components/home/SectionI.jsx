import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Slider from "react-slick";

const SectionI = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    pauseOnHover: false,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "60px",
    cssEase: "linear",
    easing: "linear",
    swipeToSlide: true,
    swipe: true,
  };
  return (
    <div className="max-w-[1440px] space-y-2 sm:space-y-0 w-full sm:mx-auto -mb-[215px] sm:mb-0">
      <div className="w-full hidden sm:grid sm:grid-cols-2 md:grid-cols-3 place-items-center items-center justify-center sm:px-8 lg:px-[54px]">
        {data.images.map((item, index) => (
          <Link
            key={index}
            to={item.slug}
            className=" w-full bg-[#57C65F] px-[13px] sm:bg-white sm:hover:bg-[#57C65F] text-center cursor-pointer sm:px-5 
          lg:px-10 xl:px-[54px] flex-[0.5] md:flex-[0.33]"
          >
            <h5 className="text-3xl sm:pt-10 pb-[14px] sm:pb-8 lg:pt-[60px] lg:pb-9 font-thin uppercase">
              {item.title.text}
            </h5>
            <GatsbyImage
              image={item.image.gatsbyImageData}
              alt={item.title.text}
              objectFit="contain"
              className="max-w-[424px] w-full0 h-full mb-12 mx-auto"
            />
          </Link>
        ))}
      </div>
      <div className="block sm:hidden bg-[#57C65F] pt-[72px] pb-[60px]">
        <Slider {...settings}>
          {data.images.map((item, index) => (
            <Link
              key={index}
              to={item.slug}
              className="max-w-[280px] w-full bg-[#57C65F] px-[13px] sm:bg-white sm:hover:bg-[#57C65F] text-center cursor-pointer sm:px-5 
          lg:px-10 xl:px-[54px] flex-[0.5] md:flex-[0.33]"
            >
              <h5 className="text-3xl leading-9 mb-9 uppercase">
                {item.title.text}
              </h5>
              <GatsbyImage
                image={item.image.gatsbyImageData}
                alt={item.title.text}
                objectFit="cover"
                className="w-full h-full mx-auto max-h-[300px]"
              />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionI;
