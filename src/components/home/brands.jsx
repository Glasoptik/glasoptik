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
          width="1440"
          height="20"
          viewBox="0 0 1440 20"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="none"
            strokeWidth="1"
            fontFamily="HelveticaNeue, Helvetica Neue"
            fontSize="25"
            fontWeight="normal"
          >
            <g fill="#000" transform="translate(0 -1749)">
              <text>
                <tspan x="-539.638" y="1768">
                  EQUE M DITA THOM BROWNE MASUNAGA MASUNAGA BY KENZO BALMAIN
                  AKONI MOSCOT EYEVAN LINDBERG PRADA BOTTEGA VENETA SAINT
                  LAURENT CELINE LGR{" "}
                </tspan>
              </text>
            </g>
          </g>
        </svg>
      </Marquee>
    </div>
  );
};

export default Brands;
