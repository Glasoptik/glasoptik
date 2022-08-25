import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="w-full overflow-x-visible z-20">
      <Marquee
        speed={100}
        gradient={false}
        className="w-min overflow-x-visible text-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1785"
          height="41"
          viewBox="0 0 1785 41"
        >
          <defs>
            <clipPath id="i0">
              <path d="M1785 0v41H0V0h1785z"></path>
            </clipPath>
          </defs>
          <g clipPath="url(#i0)">
            <text
              fontFamily="HelveticaNeue, Helvetica Neue"
              fontSize="25"
              textAnchor="center"
              transform="translate(-.5) translate(.988 24)"
            >
              EQUE M VALENTINO DITA THOM BROWNE MASUNAGA BOTTEGA VENETA CELINE
              PRADA TVR BALMAIN AKONI SAINT LAURENT MOSCOT EYEVAN LGR
            </text>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1785"
          height="41"
          viewBox="0 0 1785 41"
        >
          <defs>
            <clipPath id="i0">
              <path d="M1785 0v41H0V0h1785z"></path>
            </clipPath>
          </defs>
          <g clipPath="url(#i0)">
            <text
              fontFamily="HelveticaNeue, Helvetica Neue"
              fontSize="25"
              textAnchor="center"
              transform="translate(-.5) translate(.988 24)"
            >
              EQUE M VALENTINO DITA THOM BROWNE MASUNAGA BOTTEGA VENETA CELINE
              PRADA TVR BALMAIN AKONI SAINT LAURENT MOSCOT EYEVAN LGR
            </text>
          </g>
        </svg>
      </Marquee>
    </div>
  );
};

export default Brands;
