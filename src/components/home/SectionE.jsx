import React from "react";
import Link from "../common/link";
import { useInView } from "react-intersection-observer";

const SectionE = ({ sectione }) => {
  const [ref, inView] = useInView();
  const data = sectione.document.data;

  return (
    <div
      className={`w-full ${
        inView ? "bg-[#F5F1EE]" : "bg-white"
      } px-5 sm:px-[74px] pt-[114px] pb-[238px] transform transition-colors duration-200 ease-linear`}
    >
      <div className="w-full flex flex-col items-center text-center" ref={ref}>
        <h5 className="text-3xl font-medium mb-7">{data.title.text}</h5>
        <h6 className="text-xl leading-6 mb-[91px] text-[#414141]">
          {data.sub_title.text}
        </h6>
        <div className="w-full mt-[136px] space-x-[124px] flex items-center justify-center text-[15px]">
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
    </div>
  );
};

export default SectionE;
