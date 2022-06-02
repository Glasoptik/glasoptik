import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const SectionI = ({ data }) => {
  return (
    <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center items-center justify-center sm:px-[54px]">
      {data.images.map((item, index) => (
        <div
          key={index}
          className="max-w-[424px] w-full hover:bg-[#57C65F] text-center cursor-pointer px-5 md:px-10 xl:px-[54px] flex-[0.5] md:flex-[0.33]"
        >
          <h5 className="text-3xl pt-10 pb-8 lg:pt-[60px] lg:pb-9 text-[#414141]">
            {item.title.text}
          </h5>
          <GatsbyImage
            image={item.image.gatsbyImageData}
            alt={item.title.text}
            objectFit="contain"
            className="w-full h-full mb-12"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionI;
