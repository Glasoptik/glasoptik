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
            payment_logo_desktop {
              gatsbyImageData
              alt
            }
            payment_logo_mobile {
              gatsbyImageData
              alt
            }
            website_text
            website_link {
              url
            }
            handel_betingelser_text
            handel_betingelser_link
            privapolitik_text
            privapolitik_link
            copyright_text
          }
        }
      }
    `
  );

  return result.prismicFooter.data;
}
