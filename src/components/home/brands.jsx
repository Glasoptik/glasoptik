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
          width="1781"
          height="21"
          viewBox="0 0 1781 21"
        >
          <text
            fontFamily="HelveticaNeue, Helvetica Neue"
            fontSize="25"
            textAnchor="center"
            transform="translate(-1.5 -11) translate(.988 24)"
          >
            EQUE M VALENTINO DITA THOM BROWNE MASUNAGA BOTTEGA VENETA CELINE
            PRADA TVR BALMAIN AKONI SAINT LAURENT MOSCOT EYEVAN LGR
          </text>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1781"
          height="21"
          viewBox="0 0 1781 21"
        >
          <text
            fontFamily="HelveticaNeue, Helvetica Neue"
            fontSize="25"
            textAnchor="center"
            transform="translate(-1.5 -11) translate(.988 24)"
          >
            EQUE M VALENTINO DITA THOM BROWNE MASUNAGA BOTTEGA VENETA CELINE
            PRADA TVR BALMAIN AKONI SAINT LAURENT MOSCOT EYEVAN LGR
          </text>
        </svg>
      </Marquee>
    </div>
  );
};

export default Brands;
