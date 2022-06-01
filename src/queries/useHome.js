import { useStaticQuery, graphql } from "gatsby";

export default function useHome() {
  const result = useStaticQuery(
    graphql`
      query MyQuery {
        prismicHome {
          data {
            slider_images {
              image_title {
                text
              }
              image {
                gatsbyImageData(srcSetMaxWidth: 1440, layout: FULL_WIDTH)
              }
            }
            section_b {
              document {
                ... on PrismicSectionb {
                  id
                  data {
                    message_by {
                      text
                    }
                    description
                    image {
                      gatsbyImageData(srcSetMaxWidth: 454, layout: FULL_WIDTH)
                    }
                  }
                }
              }
            }
            section_d {
              document {
                ... on PrismicSectiond {
                  data {
                    name {
                      text
                    }
                    button_text
                    image {
                      gatsbyImageData(srcSetMaxWidth: 1052, layout: FULL_WIDTH)
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  return result.prismicHome.data;
}
