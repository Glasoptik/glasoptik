import { useStaticQuery, graphql } from "gatsby";

export default function useHome() {
  const result = useStaticQuery(
    graphql`
      query MyHomeQuery {
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
          }
        }
      }
    `
  );

  return result.prismicHome.data;
}
