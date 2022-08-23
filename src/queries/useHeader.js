import { useStaticQuery, graphql } from "gatsby";

export default function useHeader() {
  const result = useStaticQuery(
    graphql`
      query MyHeaderQuery {
        prismicHeader {
          data {
            logo {
              gatsbyImageData(
                width: 100
                height: 45
                layout: FIXED
                placeholder: NONE
              )
            }
            menu_items {
              title {
                text
              }
              link
            }
          }
        }
      }
    `
  );

  return result.prismicHeader.data;
}
