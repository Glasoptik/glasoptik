import { graphql } from "gatsby";
import React from "react";
import Intro from "../components/home/Intro";
import { SEO } from "../components/seo";

const Home = ({ data }) => {
  const intro = data.prismicIntro.data;

  return (
    <div className="w-full h-[105vh] sm:h-screen overflow-hidden">
      <SEO title="Home - GLASOPTIK" />
      <Intro intro={intro} />
    </div>
  );
};

export default Home;

export const query = graphql`
  {
    prismicIntro {
      data {
        images {
          image {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            alt
          }
          mobile_image {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            alt
          }
        }
        button_text
      }
    }
  }
`;
