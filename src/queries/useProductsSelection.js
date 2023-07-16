// import { useStaticQuery, graphql } from "gatsby";

// export default function useProductsSelection() {
//   const result = useStaticQuery(
//     graphql`
//       query MyProductsSelectionQuery {
//         allShopifyProduct(limit: 5) {
//           nodes {
//             title
//             handle
//             priceRangeV2 {
//               minVariantPrice {
//                 amount
//                 currencyCode
//               }
//               maxVariantPrice {
//                 amount
//                 currencyCode
//               }
//             }
//             featuredImage {
//               altText
//               gatsbyImageData(layout: FULL_WIDTH)
//             }
//           }
//         }
//       }
//     `
//   );

//   return result.allShopifyProduct.nodes;
// }
