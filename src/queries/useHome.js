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
              mobile_image {
                gatsbyImageData(srcSetMaxWidth: 600, layout: FULL_WIDTH)
              }
            }
            brands {
              text
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
            section_e {
              document {
                ... on PrismicSectione {
                  data {
                    title {
                      text
                    }
                    sub_title {
                      text
                    }
                    button_text
                    button_link
                  }
                }
              }
            }
            section_f {
              document {
                ... on PrismicSectionf {
                  data {
                    name {
                      text
                    }
                    image {
                      gatsbyImageData(srcSetMaxWidth: 1052, layout: FULL_WIDTH)
                    }
                  }
                }
              }
            }
            section_g {
              document {
                ... on PrismicSectionG {
                  data {
                    title {
                      text
                    }
                    images {
                      image {
                        alt
                        gatsbyImageData(layout: FULL_WIDTH)
                      }
                    }
                  }
                }
              }
            }
            section_h {
              document {
                ... on PrismicSectionh {
                  data {
                    title {
                      text
                    }
                    description
                    button_link
                    button_text
                    image {
                      gatsbyImageData(srcSetMaxWidth: 594, layout: FULL_WIDTH)
                    }
                  }
                }
              }
            }
            section_i {
              document {
                ... on PrismicSectioni {
                  data {
                    images {
                      title {
                        text
                      }
                      slug
                      image {
                        gatsbyImageData(srcSetMaxWidth: 350, layout: FULL_WIDTH)
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

  return result.prismicHome.data;
}
