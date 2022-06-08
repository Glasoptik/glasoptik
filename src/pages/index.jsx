import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import isBrowser from "../components/helper/isBrowser";
import Brands from "../components/home/brands";
import Hero from "../components/home/hero";
import Intro from "../components/home/Intro";
import SectionB from "../components/home/SectionB";
import SectionD from "../components/home/SectionD";
import SectionE from "../components/home/SectionE";
import SectionF from "../components/home/SectionF";
import SectionG from "../components/home/SectionG";
import SectionH from "../components/home/SectionH";
import SectionI from "../components/home/SectionI";
import useHome from "../queries/useHome";

const Home = ({ data }) => {
  const intro = data.prismicIntro.data;
  const products = data.allShopifyProduct.nodes;

  const home = useHome();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (isBrowser()) {
      if (showIntro) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    }
  }, [showIntro]);
  return (
    <div className="w-full overflow-x-visible">
      <Intro
        intro={intro}
        onClick={() => setShowIntro(false)}
        open={showIntro}
      />
      <Hero sliders={home.slider_images} />
      <SectionB sectionb={home.section_b} />
      <Brands />
      <SectionD sectiond={home.section_d} />
      <SectionE sectione={home.section_e} products={products} />
      <SectionF sectionf={home.section_f} />
      <SectionG />
      <Brands />
      <SectionH sectionh={home.section_h} />
      <SectionI data={home.section_i.document.data} />
    </div>
  );
};

export default Home;

export const query = graphql`
  {
    prismicIntro {
      data {
        image {
          gatsbyImageData(srcSetMaxWidth: 800, layout: FULL_WIDTH)
          alt
        }
        logo {
          gatsbyImageData(srcSetMaxWidth: 250, layout: FULL_WIDTH)
          alt
        }
        title {
          text
        }
      }
    }
    allShopifyProduct(limit: 9) {
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
