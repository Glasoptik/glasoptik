import React from "react";
import { getPrice } from "../../components/helper/getPrice";
import parse from "html-react-parser";

const Details = ({ product }) => {
  return (
    <div className="flex-[0.42] max-w-[498px] w-full h-full">
      <div className="mt-[58px]">
        <h1 className="text-[25px] leading-5 font-bold">{product.title}</h1>
        <h3 className="text-xl leading-5 font-bold mt-[17px] mb-[50px]">
          {getPrice(product.priceRangeV2)}
        </h3>
        <h5 className="text-[15px] font-bold mb-[35px]">
          FARVE:<span className="font-normal"> Slate Gray Lenses</span>
        </h5>
        <button
          className="w-full h-[53px] text-center border-[0.75px] border-solid border-black box-border mb-[72px] transition-colors duration-200 ease-linear
        hover:bg-black hover:text-white"
        >
          <span className="text-[15px] font-bold leading-5 uppercase">
            Tilføj til bag
          </span>
        </button>
        <div className="text-[15px] leading-5">
          {parse(product.descriptionHtml)}
        </div>
      </div>
    </div>
  );
};

export default Details;
