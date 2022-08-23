exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;

  const result = await graphql(`
    query AllProductsQuery {
      allShopifyProduct {
        nodes {
          handle
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error(result.errors);
  }

  const products = result.data.allShopifyProduct.nodes;

  products.forEach((product) => {
    createPage({
      path: `/product/${product.handle}`,
      component: require.resolve("./src/template/productPage/index.jsx"),
      context: {
        handle: product.handle,
      },
    });
  });
};
