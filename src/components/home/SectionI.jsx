import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const SectionI = ({ data }) => {
  return (
    <div
      className="max-w-[1440px] space-y-2 sm:space-y-0 w-full sm:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
    place-items-center items-center justify-center sm:px-8 lg:px-[54px]"
    >
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
  );
};

export default SectionI;
