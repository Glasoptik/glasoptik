import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Link from "../common/link";

const SectionF = ({ sectionf }) => {
  const data = sectionf.document.data;

  return (
    <div className="w-full">
      <div className="mt-[270px]  flex items-center justify-center space-x-5">
        {data.image_section.map((item, index) => (
          <div
            className="max-w-[515px] w-full text-center space-y-[34px]"
            key={index}
          >
            <h5 className="text-3xl">{item.title.text}</h5>
            <GatsbyImage
              image={item.image.gatsbyImageData}
              alt={item.title.text}
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="w-full mt-[113px] space-x-[124px] flex items-center justify-center text-[15px] mb-[308px]">
        <div className="invisible w-20" />
        <Link to="/web-shop">{data.button_text}</Link>
        <Link to="/web-shop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="7"
            viewBox="0 0 76 7"
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <g
                fill="#000"
                fillRule="nonzero"
                transform="translate(-1291 -730)"
              >
                <g transform="translate(1156.5 732.5)">
                  <path d="M203.389-2.25l7 3.25-7 3.25-.001-3H134.75v-.5h68.638v-3z"></path>
                </g>
              </g>
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SectionF;
