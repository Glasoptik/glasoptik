import React from "react";
import Link from "../common/link";
import { useInView } from "react-intersection-observer";

const images = [
  "https://img.freepik.com/free-vector/realistic-fashion-sun-glasses-men-with-transparent-background_6431-92.jpg?w=2000",
  "https://p7.hiclipart.com/preview/409/887/626/aviator-sunglasses-computer-icons-sunglasses.jpg",
  "https://p7.hiclipart.com/preview/601/953/79/sunglasses-white-goggles-black-sunglasses.jpg",
  "https://i.pinimg.com/originals/47/d1/98/47d198868577a721b6b60cdca7c75067.jpg",
  "https://img.freepik.com/free-vector/realistic-fashion-sun-glasses-men-with-transparent-background_6431-92.jpg?w=2000",
  "https://p7.hiclipart.com/preview/409/887/626/aviator-sunglasses-computer-icons-sunglasses.jpg",
  "https://p7.hiclipart.com/preview/601/953/79/sunglasses-white-goggles-black-sunglasses.jpg",
  "https://i.pinimg.com/originals/47/d1/98/47d198868577a721b6b60cdca7c75067.jpg",
  "https://img.freepik.com/free-vector/realistic-fashion-sun-glasses-men-with-transparent-background_6431-92.jpg?w=2000",
];

const SectionE = ({ sectione }) => {
  const [ref, inView] = useInView();
  const data = sectione.document.data;

  return (
    <div
      className={`w-full ${
        inView ? "bg-[#F5F1EE]" : "bg-white"
      } pt-[114px] pb-[238px] transform transition-colors duration-200 ease-linear px-5 sm:px-[74px]`}
    >
      <div className="w-full flex flex-col items-center text-center" ref={ref}>
        <h5 className="text-3xl font-medium mb-7">{data.title.text}</h5>
        <h6 className="text-xl leading-6 mb-[91px] text-[#414141]">
          {data.sub_title.text}
        </h6>
        <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]">
          {images.map((image, index) => (
            <Link key={index} className="w-full relative group" to="/web-shop">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={`sunglasses_${index}`}
              />
              <div
                className="opacity-0 group-hover:opacity-100 flex items-center absolute bottom-0 left-0 px-5 py-3 bg-white space-x-5
               bg-transparent transform transition-opacity duration-200 ease-linear text-[10px]"
              >
                <h6 className="uppercase">Prada Runway</h6>
                <span>2755 - DKK</span>
              </div>
            </Link>
          ))}
        </div>
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
