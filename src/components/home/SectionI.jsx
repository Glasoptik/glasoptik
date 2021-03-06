import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const SectionI = ({ data }) => {
  return (
    <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center items-center justify-center px-5 sm:px-8 lg:px-[54px]">
      {data.images.map((item, index) => (
        <Link
          key={index}
          to={item.slug}
          className="max-w-[424px] w-full hover:bg-[#57C65F] text-center cursor-pointer px-5 lg:px-10 xl:px-[54px] flex-[0.5] md:flex-[0.33]"
        >
          <h5 className="text-3xl pt-10 pb-8 lg:pt-[60px] lg:pb-9 font-thin uppercase">
            {item.title.text}
          </h5>
          <GatsbyImage
            image={item.image.gatsbyImageData}
            alt={item.title.text}
            objectFit="contain"
            className="w-full h-full mb-12"
          />
        </Link>
      ))}
    </div>
  );
};

export default SectionI;
