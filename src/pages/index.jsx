import { graphql } from "gatsby";
import React from "react";
import Intro from "../components/home/Intro";

const Home = ({ data }) => {
  const intro = data.prismicIntro.data;

  return (
    <div className="w-full overflow-x-visible">
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
            alt
          }
          mobile_image {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
            alt
          }
        }
        button_text
      }
    }
  }
`;
