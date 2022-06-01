import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="w-full overflow-x-visible z-20">
      <Marquee
        speed={100}
        gradient={false}
        className="w-full overflow-x-visible text-2xl"
      >
        Eque M DITA Thom Browne Masunaga Masunaga by Kenzo Balmain Akoni Moscot
        EYEVAN Lindberg Prada Bottega Veneta Saint Laurent Celine LGR{" "}
      </Marquee>
    </div>
  );
};

export default Brands;
