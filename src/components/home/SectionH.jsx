import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Link from "../common/link";

const SectionH = ({ sectionh }) => {
  const data = sectionh.document.data;
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-[1066px] w-full flex flex-col md:flex-row space-y-5 md:space-y-0 items-center mt-[134px] mb-[259px]">
        <div className="max-w-lg lg:max-w-[594px] w-full">
          <GatsbyImage
            image={data.image.gatsbyImageData}
            alt={data.title.text}
            objectFit="contain"
            className=" w-full h-full"
          />
        </div>
        <div className="w-full">
          <div className="mx-auto max-w-xs w-full text-center">
            <h5 className="text-3xl font-thin uppercase">{data.title.text}</h5>
            <p className="text-[15px] leading-[25px] mt-[34px] mb-[83px]">
              {data.description}
            </p>
            <Link
              to={data.button_link}
              className="text-[15px] leading-[17px] uppercase"
            >
              {data.button_text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionH;
