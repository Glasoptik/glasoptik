import { graphql } from "gatsby";
import React from "react";
import Brands from "../components/home/brands";
import Hero from "../components/home/hero";
import SectionB from "../components/home/SectionB";
import SectionD from "../components/home/SectionD";
import SectionE from "../components/home/SectionE";
import SectionG from "../components/home/SectionG";
import SectionH from "../components/home/SectionH";
import SectionI from "../components/home/SectionI";
import useHome from "../queries/useHome";
import Layout from "../components/layout";
import { SEO } from "../components/seo";

const Home = ({ data }) => {
  const products = data.shopifyCollection.products;

  const home = useHome();

  return (
    <Layout noBorder>
      <SEO title="Glas - GLASOPTIK" pathname="glas" />

      <div className="w-full overflow-x-visible">
        <Hero sliders={home.slider_images} />
        <SectionB sectionb={home.section_b} />
        <Brands />
        <SectionD sectiond={home.section_d} />
        <SectionE sectione={home.section_e} products={products} />
        <SectionD sectiond={home.section_f} />
        <SectionG sectiong={home.section_g} />
        <Brands />
        <SectionH sectionh={home.section_h} spacing={true} />
        <SectionI data={home.section_i.document.data} />
      </div>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  {
    shopifyCollection(handle: { eq: "9-product-for-home-page" }) {
      products {
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
