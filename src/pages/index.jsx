import { graphql } from "gatsby";
import React, { useEffect } from "react";
import Intro from "../components/home/Intro";
import { Helmet } from "react-helmet";

const Home = ({ data }) => {
  const intro = data.prismicIntro.data;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 1);
    }
  }, [typeof window]);
  return (
    <div className="w-full overflow-x-visible">
      <Helmet>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>
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
