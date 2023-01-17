const webpack = require("webpack");

exports.onCreateWebpackConfig = ({ stage, loaders, actions, plugins }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-pdf/, // check /pdfjs-dist/ too
            use: loaders.null(),
          },
          {
            test: /pdfjs-dist/, // check /pdfjs-dist/ too
            use: loaders.null(),
          },
          {
            test: /safer-buffer/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        module: "empty",
        dgram: "empty",
        dns: "mock",
        fs: "empty",
        http2: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty",
        process: require.resolve("process/browser"),
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify"),
        util: require.resolve("util"),
        buffer: require.resolve("buffer"),
        asset: require.resolve("assert"),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      }),
    ],
  });
};

// exports.createPages = async function ({ actions, graphql }) {
//   const { createPage } = actions;

//   const result = await graphql(`
//     query AllProductsQuery {
//       allShopifyProduct {
//         nodes {
//           handle
//         }
//       }
//     }
//   `);

//   if (result.errors) {
//     console.error(result.errors);
//     throw new Error(result.errors);
//   }

//   const products = result.data.allShopifyProduct.nodes;

//   products.forEach((product) => {
//     createPage({
//       path: `/product/${product.handle}`,
//       component: require.resolve("./src/template/productPage/index.jsx"),
//       context: {
//         handle: product.handle,
//       },
//     });
//   });
// };
