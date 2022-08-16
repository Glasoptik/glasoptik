import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Reveal from "../components/common/reveal";
import SectionI from "../components/home/SectionI";
import ProductsSelection from "../components/common/productsSelection";

const About = ({ data }) => {
  const about = data.prismicAboutUs.data;
  const sectionI = data.prismicSectioni.data;
  const relatedProducts = data.allShopifyProduct.nodes;

  return (
    <div className="max-w-[1440px] w-full h-full mx-auto px-5 sm:px-[74px] mt-[105px] md:mt-40">
      <div className="w-full flex flex-col items-center text-center">
        <div className="w-full py-5 sm:py-10 lg:py-[58px] px-5 sm:px-10 md:px-24 lg:px-[190px] bg-[#F5F1EE]">
          <GatsbyImage
            image={about.hero_image.gatsbyImageData}
            alt="Hero"
            objectFit="contain"
            className="w-full h-full"
          />
        </div>
        <div className="max-w-xl w-full mb-52">
          <h1 className="text-3xl font-thin mt-12 mb-[13px]">
            {about.title.text}
          </h1>
          <Reveal
            effect="animate-fade-up"
            className="prose opacity-0 whitespace-pre-wrap text-[15px] leading-[25px]"
            dangerouslySetInnerHTML={{ __html: about.description.html }}
          />
        </div>
      </div>
      <SectionI data={sectionI} />
      <ProductsSelection
        title={about.products_section_title}
        buttonText={about.go_to_online_store}
        relatedProducts={relatedProducts}
      />
    </div>
  );
};

export default About;

export const query = graphql`
  query AboutUSQuery {
    prismicAboutUs {
      data {
        hero_image {
          gatsbyImageData(layout: FULL_WIDTH, srcSetMaxWidth: 1000)
          alt
        }
        title {
          text
        }
        description {
          html
        }
        products_section_title
        go_to_online_store
      }
    }
    prismicSectioni {
      data {
        images {
          title {
            text
          }
          image {
            gatsbyImageData(srcSetMaxWidth: 350, layout: FULL_WIDTH)
          }
        }
      }
    }
    allShopifyProduct(limit: 5) {
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
          altText
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`;
