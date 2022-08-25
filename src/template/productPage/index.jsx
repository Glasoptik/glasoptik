import { graphql } from "gatsby";
import React, { useState } from "react";
import ProductsSelection from "../../components/common/productsSelection";
import Details from "./Details";
import Gallery from "./gallery";
import LightBox from "./LightBox";
import Layout from "../../components/layout";

const ProductPage = ({ data }) => {
  const product = data?.shopifyProduct;
  const relatedProducts = data?.allShopifyProduct?.nodes;
  const [openLightbox, setOpenLightbox] = useState(false);

  if (!product) return null;
  return (
    <Layout>
      <div className="relative max-w-[1440px] mx-auto w-full flex flex-col px-5 sm:px-[74px] mt-40">
        <LightBox
          openLightbox={openLightbox}
          changeState={(prevStat) => setOpenLightbox(!prevStat)}
        />
        <div className="w-full h-full">
          <div className="flex items-center flex-col lg:items-start lg:flex-row lg:space-x-14 mb-8">
            <Gallery media={product.media} />
            <Details
              product={product}
              changeState={(prevStat) => setOpenLightbox(!prevStat)}
            />
          </div>
        </div>
      </div>
      <div className="relative max-w-[1440px] mx-auto w-full flex flex-col pl-5 sm:px-[74px]">
        <ProductsSelection
          title="GLAS ONLINE SELEKTION"
          buttonText="Gå til webbutik"
          relatedProducts={relatedProducts}
        />
      </div>
    </Layout>
  );
};

export default ProductPage;

export const query = graphql`
  query MyProductQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      shopifyId
      title
      handle
      descriptionHtml
      featuredImage {
        src
        gatsbyImageData(layout: FULL_WIDTH)
        altText
      }
      metafields {
        namespace
        key
        value
      }
      media {
        ... on ShopifyMediaImage {
          id
          alt
          image {
            gatsbyImageData(layout: FULL_WIDTH)
            altText
          }
        }
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants {
        shopifyId
        title
        price
        availableForSale
      }
    }
    allShopifyProduct(limit: 5, filter: { handle: { ne: $handle } }) {
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
          src
        }
      }
    }
  }
`;
