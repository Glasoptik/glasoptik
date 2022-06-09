import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "../common/link";

const SectionD = ({ sectiond }) => {
  const data = sectiond.document.data;
  return (
    <div className=" w-full flex flex-col items-center">
      <div className="max-w-[1052px] w-full mt-[120px] mb-[275px]">
        <GatsbyImage
          image={data.image.gatsbyImageData}
          alt={data.name.text}
          objectFit="contain"
          className="w-full h-full"
        />
        <div className="w-full">
          <h6 className="text-[10px] leading-3 mt-[10px] uppercase">
            {data.name.text}
          </h6>
          {data.button_text && (
            <div className="w-full mt-[90px] space-x-[124px] flex items-center justify-center text-[15px] uppercase">
              <div className="invisible w-20" />
              <Link to="/web-shop" className="leading-[50px]">
                {data.button_text}
              </Link>
              <Link to="/web-shop">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="76"
                  height="7"
                  viewBox="0 0 76 7"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                  >
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
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionD;
