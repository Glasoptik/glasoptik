import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Reveal from "../common/reveal";

const SectionB = ({ sectionb }) => {
  const data = sectionb.document.data;
  return (
    <div className="w-full px-[13px] sm:px-[74px] sm:flex justify-center">
      <Reveal as="h3" effect="animate-fade-up" className="opacity-0">
        <div className="max-w-[1052px] w-full flex flex-col md:flex-row items-center mt-[71px] sm:mt-[194px] mb-16 sm:mb-[120px]">
          <p className="sm:hidden text-[15px] leading-5 mb-[14px]">
            {data.description}
          </p>
          <GatsbyImage
            image={data.image.gatsbyImageData}
            alt={data.message_by.text}
            objectFit="contain"
            className="hidden sm:block max-h-[438px] sm:max-w-[452px] w-full h-full"
          />
          <GatsbyImage
            image={data.image.gatsbyImageData}
            alt={data.message_by.text}
            objectFit="cover"
            className="sm:hidden max-h-[438px] w-full h-full"
          />
          <div className="w-full text-center mt-1 md:mt-0 md:ml-[74px]">
            <p className="hidden sm:block text-xl lg:text-2xl lg:text-[35px] font-thin lg:leading-[50px]">
              {data.description}
            </p>
            <h6 className="sm:mt-[51px] text-[10px] sm:text-[15px] uppercase leading-3 sm:leading-[17px]">
              {data.message_by.text}
            </h6>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default SectionB;
