import React from "react";
import Link from "./link";

const ProductsSelection = ({ title, buttonText }) => {
  return (
    <div className="w-full mt-[303px]">
      <div className="w-full flex items-center justify-between mb-[54px]">
        <h1 className="text-3xl leading-5">{title}</h1>
        <div className="space-x-[50px]">
          <button
          //   onClick={() => slider.slickPrev()}
          >
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
                  transform="translate(-1156 -730)"
                >
                  <g transform="translate(1156.5 732.5)">
                    <path d="M6.611-2.25v3H75.25v.5H6.611v3l-7-3.25 7-3.25z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <button
          //   onClick={() => slider.slickNext()}
          >
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
          </button>
        </div>
      </div>
      {/* Products Section */}
      <div className="w-full space-x-[60px] flex items-center justify-center text-[15px] mt-[314px]">
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
                transform="translate(-1156 -730)"
              >
                <g transform="translate(1156.5 732.5)">
                  <path d="M6.611-2.25v3H75.25v.5H6.611v3l-7-3.25 7-3.25z"></path>
                </g>
              </g>
            </g>
          </svg>
        </Link>
        <Link to="/web-shop" className="text-3xl text-[#414141]">
          {buttonText}
        </Link>
        <div className="invisible w-20" />
      </div>
    </div>
  );
};

export default ProductsSelection;
