import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const Brands = ({ data }) => {
  const brands = data.prismicBrands.data;
  const [selectedBrand, setSelectedBrand] = useState(brands.brand[0]);
  console.log(selectedBrand);
  return (
    <div className="max-w-[1440px] w-full overflow-x-visible flex justify-between box-border mx-auto px-5 sm:px-[74px] space-x-[66px] pt-4">
      <div className="flex flex-col items-start max-w-xs w-full">
        {brands.brand.map((brand, index) => (
          <button
            onClick={() => setSelectedBrand(brand)}
            key={index}
            className="text-[15px] leading-6 font-medium"
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

export default Brands;

export const query = graphql`
  {
    prismicBrands {
      data {
        brand {
          brand_name {
            text
          }
          brand_image {
            gatsbyImageData(
              srcSetMaxWidth: 510
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
            alt
          }
        }
      }
    }
  }
`;
