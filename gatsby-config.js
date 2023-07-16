require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `GLASOPTIK`,
    description: `GLAS CHRISTIANSHAVN OPTIK is family business with exclusive eyewear - we carry only the finest brands | CELINE - PRADA - EQUE M - VALENTINO - DITA - THOM BROWNE - MASUNAGA - BOTTEGA VENETA - TVR -BALMAIN -AKONI -SAINT LAURENT -MOSCOT -EYEVAN -LGR`,
    image: `/src/assets/favicon.png`,
    siteUrl: `https://www.glasoptik.dk`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.glasoptik.dk",
        sitemap: "https://www.glasoptik.dk/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/favicon.jpg",
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        customTypesApiToken: process.env.GATSBY_PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
    },
    // {
    //   resolve: "gatsby-source-shopify",
    //   options: {
    //     password: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
    //     storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
    //     shopifyConnections: ["collections"], // Optional but recommended
    //   },
    // },
  ],
};
