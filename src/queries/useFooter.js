import { useStaticQuery, graphql } from "gatsby";

export default function useFooter() {
  const result = useStaticQuery(
    graphql`
      query MyFooterQuery {
        prismicFooter {
          data {
            footer {
              footer_section {
                document {
                  ... on PrismicFooterSection {
                    id
                    data {
                      menu_title {
                        text
                      }
                      item {
                        title
                        link
                      }
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

  return result.prismicFooter.data;
}
