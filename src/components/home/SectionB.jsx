import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Reveal from "../common/reveal";

const SectionB = ({ sectionb }) => {
  const data = sectionb.document.data;
  return (
    <div className="w-full px-[13px] sm:px-[74px] sm:flex justify-center">
      <Reveal as="h3" effect="animate-fade-up" className="opacity-0">
        <div className="max-w-[1052px] w-full flex flex-col md:flex-row items-center mt-[71px] sm:mt-[194px] mb-16 sm:mb-[120px]">
          <h5 className="sm:hidden text-3xl text-center mb-4 font-thin uppercase">
            {data.message_by.text}
          </h5>
          <div className="max-w-lg lg:max-w-[452px] w-full">
            <GatsbyImage
              image={data.image.gatsbyImageData}
              alt={data.message_by.text}
              objectFit="contain"
              className="hidden sm:block w-full h-full"
            />
            <GatsbyImage
              image={data.image.gatsbyImageData}
              alt={data.message_by.text}
              objectFit="cover"
              className="sm:hidden w-full h-96"
            />
          </div>
          <div className="w-full text-center mt-1 md:mt-0 md:ml-[74px]">
            <h6 className="hidden sm:block sm:mt-[51px] text-xl sm:text-3xl uppercase leading-6 sm:leading-9 mb-[30px]">
              {data.message_by.text}
            </h6>
            <p className="text-[15px] leading-[25px] mt-4 sm:mt-[34px] mb-10 sm:mb-[83px]">
              {data.description}
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default SectionB;
