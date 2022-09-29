// ============================================================================================== //
// ===================================== API CONFIGURATION ====================================== //
// ============================================================================================== //

const domain = process.env.GATSBY_SHOPIFY_STORE_URL;
const accessToken = process.env.GATSBY_STOREFRONT_API_ACCESS_TOKEN;
export async function ShopifyData(query) {
  const URL = `https://${domain}/api/2022-04/graphql.json`;

  console.log("Domain: ", domain);
  console.log("Access Token: ", accessToken);
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
    console.log("Response", response);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error(
      "There was an error fetching the data from Shopify. Please try again later."
    );
  }
}
