import React, { useEffect, useRef, useState } from "react";
import { recommendedProducts } from "../../lib/product";
import useProductsSelection from "../../queries/useProductsSelection";
import Slider from "react-slick";
import Link from "./link";
import { getPrice } from "../helper/getPrice";
import { GatsbyImage } from "gatsby-plugin-image";

const ProductsSelection = ({ title, buttonText, relatedProducts }) => {
  let slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 3.6,
    slidesToScroll: 1,
    pauseOnHover: false,

    marginRight: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-[303px]">
      <div className="w-full flex items-center justify-between mb-[54px]">
        <h1 className="text-2xl sm:text-3xl leading-5">{title}</h1>
        <div className="hidden md:block space-x-[50px]">
          <button onClick={() => slider.slickPrev()}>
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
          <button onClick={() => slider.slickNext()}>
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
      <Slider ref={(c) => (slider = c)} {...settings}>
        {relatedProducts.map((product, index) => (
          <Link
            key={index}
            className="max-w-[350px] w-full h-full relative group aspect-square"
            to={`/product/${product.handle}`}
          >
            <GatsbyImage
              image={product.featuredImage.gatsbyImageData}
              className="w-full h-full object-cover"
              alt={product.title}
            />
            <div
              className="opacity-0 group-hover:opacity-100 flex items-center absolute bottom-0 left-0 px-5 py-3 bg-white space-x-5
               bg-transparent transform transition-opacity duration-200 ease-linear text-[10px]"
            >
              <h6 className="uppercase">{product.title}</h6>
              <span>{getPrice(product.priceRangeV2)}</span>
            </div>
          </Link>
        ))}
      </Slider>
      <div className="w-full space-x-[60px] flex items-center justify-center text-[15px] mt-40 md:mt-60 lg:mt-[314px]">
        <Link to="/webbutik">
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
        <Link to="/webbutik" className="text-xl md:text-3xl uppercase">
          {buttonText}
        </Link>
        <div className="invisible hidden sm:block w-20" />
      </div>
    </div>
  );
};

export default ProductsSelection;
