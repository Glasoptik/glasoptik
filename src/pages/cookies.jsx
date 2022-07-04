import React from "react";

const Cookies = () => {
  return (
    <div className="max-w-[1440px] w-full overflow-x-visible flex justify-between box-border mx-auto px-5 sm:px-[74px] space-x-[66px] pt-4 mt-40">
      <div className="flex flex-col items-start max-w-xs w-full">
        {brands.brand.map((brand, index) => (
          <button
            onClick={() => setSelectedBrand({ id: index, ...brand })}
            key={index}
            className={`text-[15px] leading-6 font-medium ${
              selectedBrand.id === index && "text-[#999999]"
            }`}
          >
            {brand.brand_name.text}
          </button>
        ))}
      </div>
      <div className="max-w-[502px] w-full">
        <GatsbyImage
          image={selectedBrand.brand_image.gatsbyImageData}
          alt={selectedBrand.brand_name.text}
          objectFit="contain"
          className="w-full h-full"
        />
      </div>
      <div className="max-w-xs w-full invisible" />
    </div>
  );
};

export default Cookies;
