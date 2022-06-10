import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "../common/link";
import { useInView } from "react-intersection-observer";
import { getPrice } from "../helper/getPrice";

const SectionE = ({ sectione, products }) => {
  const [ref, inView] = useInView();
  const data = sectione.document.data;

  return (
    <div
      className={`w-full ${
        inView ? "bg-[#57C65F]" : "bg-white"
      } pt-[114px] pb-[238px] transform delay-50 transition-colors duration-500 ease-in `}
    >
      <div className="w-full flex flex-col items-center text-center">
        <h5 className="text-3xl font-medium mb-7 uppercase">
          {data.title.text}
        </h5>
        <h6 className="text-xl leading-6 mb-[91px] uppercase">
          {data.sub_title.text}
        </h6>
        <div
          className="max-w-[1440px] w-full mx-auto px-5 sm:px-[74px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]"
          ref={ref}
        >
          {products.map((product, index) => (
            <Link
              key={index}
              className="w-full relative group"
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
        </div>
        <div className="w-full mt-[136px] space-x-[124px] flex items-center justify-center">
          <div className="invisible w-20" />
          <Link to="/web-shop" className="uppercase text-[15px]">
            {data.button_text}
          </Link>
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
    </div>
  );
};

export default SectionE;
