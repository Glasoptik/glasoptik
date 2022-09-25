import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ProductsSelection from "../components/common/productsSelection";
import Layout from "../components/layout";
import { SEO } from "../components/seo";

const Butikken = ({ data }) => {
  const butikkenData = data.prismicButikken.data;
  const relatedProducts = data.allShopifyProduct.nodes;
  return (
    <Layout>
      <SEO title="Butikken - GLASOPTIK" pathname="butikken" />

      <div className="max-w-[1440px] w-full mx-auto px-[13px] sm:px-[74px] mt-[105px] md:mt-40">
        <GatsbyImage
          image={butikkenData.featured_image.gatsbyImageData}
          alt={butikkenData.featured_image.alt || "Featured"}
          loading="eager"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5 mt-5">
          {butikkenData.gallery?.map((image, index) => (
            <GatsbyImage
              image={image.image.gatsbyImageData}
              alt={image.image.alt || "Featured"}
              loading="eager"
              objectFit="cover"
              objectPosition="center"
            />
          ))}
        </div>
        <ProductsSelection
          title="GLAS ONLINE SELEKTION"
          buttonText="Gå til webbutik"
          relatedProducts={relatedProducts}
          hideArrow
        />
      </div>
    </Layout>
  );
};

export default Butikken;

export const query = graphql`
  {
    prismicButikken {
      data {
        featured_image {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
          alt
        }
        gallery {
          image {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            alt
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
