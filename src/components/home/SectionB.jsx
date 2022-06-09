import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Reveal from "../common/reveal";

const SectionB = ({ sectionb }) => {
  const data = sectionb.document.data;
  return (
    <div className="w-full px-[74px] flex justify-center">
      <Reveal as="h3" effect="animate-fade-up" className="opacity-0">
        <div className="max-w-[1052px] w-full flex items-center mt-[194px] mb-[120px]">
          <GatsbyImage
            image={data.image.gatsbyImageData}
            alt={data.message_by.text}
            objectFit="contain"
            className="min-w-[452px] w-full h-full"
          />
          <div className="w-full text-center ml-[74px]">
            <p className="text-2xl lg:text-[35px] font-light leading-[50px]">
              {data.description}
            </p>
            <h6 className="mt-[51px] text-[15px] uppercase leading-[17px]">
              {data.message_by.text}
            </h6>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default SectionB;
