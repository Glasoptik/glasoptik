import { graphql } from "gatsby";
import React from "react";
import ProductsSelection from "../../components/common/productsSelection";
import Details from "./Details";
import Gallery from "./gallery";

const ProductPage = ({ data }) => {
  console.log(data);
  const product = data?.shopifyProduct;
  if (!product) return null;
  return (
    <div className="max-w-[1440px] mx-auto w-full flex flex-col px-5 sm:px-[74px]">
      <div className="flex flex-col md:flex-row space-x-14 mb-8">
        <Gallery media={product.media} />
        <Details product={product} />
      </div>
      <ProductsSelection
        title="GLAS ONLINE SELEKTION"
        buttonText="Gå til webbutik"
        productId={product.shopifyId}
      />
    </div>
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
      }
    }
  }
`;
