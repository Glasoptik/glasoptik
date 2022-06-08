// ============================================================================================== //
// ===================================== API CONFIGURATION ====================================== //
// ============================================================================================== //

const domain = process.env.SHOPIFY_STORE_URL;
const accessToken = process.env.STOREFRONT_API_ACCESS_TOKEN;
export async function ShopifyData(query) {
  const URL = `https://${domain}/api/2022-04/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": accessToken,
      Accept: "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const response = await fetch(URL, options).then((res) => res.json());
    return response;
  } catch (error) {
    console.error(error);
    throw new Error(
      "There was an error fetching the data from Shopify. Please try again later."
    );
  }
}
