import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Link from "../components/common/link";
import Reveal from "../components/common/reveal";
import { getPrice } from "../components/helper/getPrice";
import SectionH from "../components/home/SectionH";
import Layout from "../components/layout";

const Webshop = ({ data }) => {
  const butikData = data.prismicWebbutik.data;
  const products = data.allShopifyProduct.nodes;
  return (
    <Layout>
      <div className="max-w-[1440px] w-screen h-full flex flex-col items-center px-5 sm:px-[74px] mx-auto mt-[105px] md:mt-40 md:mt-40">
        <h1 className="text-3xl uppercase font-thin text-center mt-[6px] mb-[29px]">
          {butikData.title.text}
        </h1>
        <Reveal
          effect="animate-fade-up"
          className="opacity-0 whitespace-pre-wrap text-[15px] leading-[25px] max-w-[522px] w-full text-center text-black"
          dangerouslySetInnerHTML={{ __html: butikData.description.html }}
        />
        <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 gap-[10px] mt-14 mb-24">
          {products.map((product, index) => (
            <Link
              key={index}
              className="w-full relative group"
              to={`/product/${product.handle}`}
            >
              <GatsbyImage
                image={product.featuredImage.gatsbyImageData}
                className="w-full h-full object-cover"
                alt={product.title}
              />
              <div
                className="sm:opacity-0 group-hover:opacity-100 flex items-center absolute bottom-0 left-0 px-5 py-3 bg-white space-x-5
               bg-transparent transform transition-opacity duration-200 ease-linear text-[10px]"
              >
                <h6 className="uppercase">{product.title}</h6>
                <span>{getPrice(product.priceRangeV2)}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mb-4 w-full">
          <SectionH sectionh={butikData.nyheder_section} />
        </div>
      </div>
    </Layout>
  );
};

export default Webshop;

export const query = graphql`
  {
    prismicWebbutik {
      data {
        title {
          text
        }
        description {
          html
        }
        nyheder_section {
          document {
            ... on PrismicSectionh {
              id
              data {
                title {
                  text
                }
                description
                button_link
                button_text
                image {
                  gatsbyImageData(srcSetMaxWidth: 594, layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
    allShopifyProduct {
      nodes {
        title
        handle
        priceRangeV2 {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        featuredImage {
          gatsbyImageData(layout: FULL_WIDTH, formats: WEBP)
        }
      }
    }
  }
`;
