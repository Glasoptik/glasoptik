import { useStaticQuery, graphql } from "gatsby";

export default function useHeader() {
  const result = useStaticQuery(
    graphql`
      query MyHeaderQuery {
        prismicHeader {
          data {
            logo {
              gatsbyImageData(width: 100, height: 45, layout: FIXED)
            }
            menu_items {
              title {
                text
              }
              link
            }
            nav_link_text
            nav_link_url
          }
        }
      }
    `
  );

  return result.prismicHeader.data;
}
