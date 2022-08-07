import { ShopifyData } from "./config";

// ============================================================================================== //
// ================================ GET CART WITHOUT CUSTOMER ================================ //
// ============================================================================================== //

export const getCart = async (id) => {
  const query = `query{
    cart(id: "${id}") {
      id
          checkoutUrl
          lines(first: 25) {
            nodes {
              id
              sellingPlanAllocation {
                sellingPlan {
                  id
                  name
                }
                priceAdjustments { 
                  price {
                    amount
                  }
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  product {
                    title
                    handle
                  }
                  availableForSale
                  title
                  image {
                    url
                  }
                  priceV2 {
                    amount
                  }
                }
              }
              quantity
            }
          }
          attributes {
            key
            value
          }
          estimatedCost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
            totalTaxAmount {
              amount
              currencyCode
            }
            totalDutyAmount {
              amount
              currencyCode
            }
          }
    }
  }`;

  const response = await ShopifyData(query);
  return response?.data.cart;
};

// ============================================================================================== //
// ================================ CREATE CART WITHOUT CUSTOMER ================================ //
// ============================================================================================== //

export const createCart = async (product) => {
  try {
    const query = `mutation {
      cartCreate(
        input: {
        lines: [{
          merchandiseId: "${product.merchandiseId}",
          quantity: ${product.quantity}
        }],
        attributes: { key: "cart_attribute", value: "This is a cart attribute" }
      }
    ) {
      cart {
        id
        checkoutUrl
        lines(first: 25) {
          nodes {
            id
            sellingPlanAllocation {
              sellingPlan {
                id
                name
              }
              priceAdjustments { 
                price {
                  amount
                }
              }
            }
            merchandise {
              ... on ProductVariant {
                id
                title
                image {
                  url
                }
                priceV2 {
                  amount
                }
              }
            }
            quantity
          }
        }
        attributes {
          key
          value
        }
        estimatedCost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
  `;

    const response = await ShopifyData(query);
    return response.data.cartCreate.cart;
  } catch (error) {
    console.log(error);
  }
};

// ============================================================================================== //
// ======================================= ADD ITEM TO CART ===================================== //
// ============================================================================================== //

export const addItemToCart = async (cartId, product) => {
  try {
    const query = `mutation {
      cartLinesAdd(cartId: "${cartId}", lines: [{
        merchandiseId: "${product.merchandiseId}",
        quantity: ${product.quantity}
      }]) {
        cart {
          id
          checkoutUrl
          lines(first: 25) {
            nodes {
              id
              sellingPlanAllocation {
                sellingPlan {
                  id
                  name
                }
                priceAdjustments { 
                  price {
                    amount
                  }
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  image {
                    url
                  }
                  priceV2 {
                    amount
                  }
                }
              }
              quantity
            }
          }
          attributes {
            key
            value
          }
          estimatedCost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
            totalTaxAmount {
              amount
              currencyCode
            }
            totalDutyAmount {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }
    `;

    const response = await ShopifyData(query);
    console.log(response.data.cartLinesAdd);
    return response.data.cartLinesAdd.cart;
  } catch (error) {
    console.log(error);
  }
  // }
};

// ============================================================================================== //
// ========================================== UPDATE CART ======================================= //
// ============================================================================================== //

export const updateCart = async (cartId, product) => {
  try {
    const query = `mutation {
      cartLinesUpdate(cartId: "${cartId}", lines: [{id: "${product.lineId}", quantity: ${product.quantity}, merchandiseId: "${product.shopifyId}"}]) {
        cart {
          id
          checkoutUrl
          buyerIdentity {
            email
            countryCode
            customer {
              displayName
            }
          }
          lines(first: 25) {
            nodes {
              id
              sellingPlanAllocation {
                sellingPlan {
                  id
                  name
                }
                priceAdjustments { 
                  price {
                    amount
                  }
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  image {
                    url
                  }
                  priceV2 {
                    amount
                  }
                }
              }
              quantity
            }
          }
          attributes {
            key
            value
          }
          estimatedCost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
            totalTaxAmount {
              amount
              currencyCode
            }
            totalDutyAmount {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`;
    const response = await ShopifyData(query);
    return response.data.cartLinesUpdate.cart;
  } catch (error) {
    console.log(error);
  }
};

// ============================================================================================== //
// ====================================== REMOVE ITEM FROM CART ================================= //
// ============================================================================================== //

export const removeItemFromCart = async (cartId, product) => {
  try {
    const query = `mutation {
    cartLinesRemove(cartId: "${cartId}", lineIds: ["${product.lineId}"]) {
      cart {
        id
        checkoutUrl
        lines(first: 25) {
          nodes {
            id
            merchandise {
              ... on ProductVariant {
                id
                title
                image {
                  url
                }
                priceV2 {
                  amount
                }
              }
            }
            quantity
          }
        }
        attributes {
          key
          value
        }
        estimatedCost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }`;
    const response = await ShopifyData(query);
    return response.data.cartLinesRemove.cart;
  } catch (error) {
    console.log(error);
  }
};
