import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const Intro = ({ intro, onClick, open }) => {
  return (
    <div
      className={`fixed w-screen h-screen top-0 left-0 z-50 overflow-hidden transform transition-all duration-200 ${
        !open ? "hidden" : "block"
      } cursor-pointer`}
      onClick={onClick}
    >
      <div className="max-w-[1440px] w-screen h-screen mx-auto flex items-center flex-1">
        <div className="flex-[0.5] w-full h-full">
          <GatsbyImage
            image={intro.image.gatsbyImageData}
            alt={intro.image.alt}
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="flex-[0.5] w-full h-full flex flex-col items-center justify-center bg-white space-y-[74px]">
          <GatsbyImage
            image={intro.logo.gatsbyImageData}
            alt={intro.logo.alt}
            objectFit="contain"
            className="w-64 h-auto"
          />
          <h6 className="text-[15px] text-[#414141] leading-[17px]">
            {intro.title.text}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Intro;
