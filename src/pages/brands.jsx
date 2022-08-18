import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Link from "../components/common/link";
import Layout from "../components/layout";

const Brands = ({ data }) => {
  const brands = data.prismicBrands.data;
  const [selectedBrand, setSelectedBrand] = useState({
    id: 0,
    ...brands.brand[0],
  });
  return (
    <Layout>
      <div className="max-w-[1440px] w-full overflow-x-visible flex flex-col items-center justify-between box-border mx-auto px-5 sm:px-[74px] pt-4 mt-[105px] md:mt-40">
        <div className="w-full flex justify-between box-border space-x-5 md:space-x-[66px]">
          <div className="flex flex-col items-start max-w-max md:max-w-xs w-full">
            {brands.brand.map((brand, index) => (
              <button
                onClick={() => setSelectedBrand({ id: index, ...brand })}
                key={index}
                className={`text-xs md:text-[15px] leading-6 font-medium ${
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
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="max-w-xs w-full hidden md:block invisible" />
        </div>
        <Link
          to="/webbutik"
          className="mt-36 md:mt-20 uppercase text-center text-black"
        >
          Besøg WEBBUTIK
        </Link>
      </div>
    </Layout>
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
            gatsbyImageData(srcSetMaxWidth: 510, layout: FULL_WIDTH)
            alt
          }
        }
      }
    }
  }
`;
