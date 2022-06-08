import { ShopifyData } from "./config";

// ============================================================================================== //
// ===================================== RECOMMENDED PRODUCTS =================================== //
// ============================================================================================== //

export const recommendedProducts = async (id) => {
  const query = `query {
    productRecommendations(productId: "${id}") {
        title
        handle
        featuredImage {
          url
        }
    }
}`;

  const response = await ShopifyData(query);
  return response.data.productRecommendations;
};
