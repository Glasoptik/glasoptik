import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Link from "../common/link";

const SectionH = ({ sectionh, spacing }) => {
  const data = sectionh.document.data;
  return (
    <div className="w-full flex items-center justify-center">
      <div
        className={`max-w-[1066px] w-full flex flex-col md:flex-row sm:space-y-5 md:space-y-0 items-center mt-[61px] sm:mt-[134px] px-[13px] ${
          spacing && "mb-20 sm:mb-[259px]"
        }`}
      >
        <div className="max-w-lg lg:max-w-[594px] w-full">
          <h5 className="sm:hidden text-3xl text-center mb-4 font-thin uppercase">
            {data.title.text}
          </h5>
          <GatsbyImage
            image={data.image.gatsbyImageData}
            alt={data.title.text}
            objectFit="contain"
            className="hidden sm:block w-full h-full"
          />
          <GatsbyImage
            image={data.image.gatsbyImageData}
            alt={data.title.text}
            objectFit="cover"
            className="sm:hidden w-full h-96 "
          />
        </div>
        <div className="w-full">
          <div className="mx-auto sm:max-w-xs w-full text-center">
            <h5 className="hidden sm:block text-3xl font-thin uppercase">
              {data.title.text}
            </h5>
            <p className="text-[15px] leading-[25px] mt-4 sm:mt-[34px] mb-10 sm:mb-[83px]">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center">
              <Link
                to={data.button_link}
                className="text-[15px] leading-[17px] uppercase text-center"
              >
                {data.button_text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionH;
