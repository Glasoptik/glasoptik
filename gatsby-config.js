require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        customTypesApiToken: process.env.GATSBY_PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"], // Optional but recommended
      },
    },
  ],
};
