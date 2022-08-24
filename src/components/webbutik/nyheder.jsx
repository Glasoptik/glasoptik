import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Link from "../common/link";

const Nyheder = ({ sectionh }) => {
  const data = sectionh.document.data;
  return (
    <div className="w-full flex items-center justify-center">
      <div
        className={`w-full flex flex-col md:flex-row sm:space-y-5 md:space-y-0 items-center mt-[61px] justify-evenly sm:mt-[134px] px-[13px]`}
      >
        <div className="w-full sm:w-1/2 md:w-1/3">
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
            className="sm:hidden w-full "
          />
        </div>
        <div className="w-fit">
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

export default Nyheder;
