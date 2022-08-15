import React, { createContext, useState, useEffect } from "react";
import {
  createCart,
  addItemToCart,
  updateCart,
  getCart,
  removeItemFromCart,
} from "../lib/cart";

const contextDefaultValues = {
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantityCart: () => {},
  cartOpen: false,
  setCartOpen: () => {},
  cartId: "",
  setCartId: () => "",
  estimatedCost: null,
  setEstimatedCost: () => {},
  checkoutUrl: "",
  setCheckoutUrl: () => "",
  disabled: false,
  setDisabled: () => {},
};

const CartContext = createContext(contextDefaultValues);
let cartKey = "glas-headless";
const ShopProvider = ({ children }) => {
  let [cart, setCart] = useState([]);
  let [disabled, setDisabled] = useState(false);
  let [cartOpen, setCartOpen] = useState(false);
  let [cartId, setCartId] = useState("");
  let [estimatedCost, setEstimatedCost] = useState(null);
  let [checkoutUrl, setCheckoutUrl] = useState("");

  useEffect(() => {
    if (localStorage.getItem(cartKey)) {
      const glasHeadlessCart = JSON.parse(localStorage.getItem(cartKey));

      if (glasHeadlessCart.cardId) {
        setCartId(glasHeadlessCart.cardId);
        getCartData(glasHeadlessCart.cardId, glasHeadlessCart.products);
      }
    }
  }, [cartId]);

  // ========================================================================================================================== //
  // ======================================================== GET CART ======================================================== //
  // ========================================================================================================================== //

  async function getCartData(id, products) {
    let newCart = [];
    const response = await getCart(id);

    if (response?.id) {
      setCheckoutUrl(response.checkoutUrl);
      setEstimatedCost(response.estimatedCost);
      response.lines?.nodes.map((item) => {
        let added = false;
        products.map((cartItem) => {
          if (
            cartItem.shopifyId === item.merchandise.id &&
            cartItem.sellingPlanId ===
              item.sellingPlanAllocation?.sellingPlan.id
          ) {
            added = true;
            return newCart.push({
              ...cartItem,
              shopifyId: item.merchandise.id,
              quantity: item.quantity,
              lineId: item.id,
              price: cartItem.sellingPlanId
                ? item.sellingPlanAllocation?.priceAdjustments[0].price.amount
                : cartItem.price,
            });
          }
        });

        if (!added) {
          added = true;
          return newCart.push({
            availableForSale: item.merchandise.availableForSale,
            handle: item.merchandise.product.handle,
            image: item.merchandise.image.url,
            price: item.sellingPlanAllocation
              ? item.sellingPlanAllocation?.priceAdjustments[0].price.amount
              : item.merchandise.priceV2.amount,
            quantity: item.quantity,
            title:
              item.merchandise.title !== "Default Title"
                ? item.merchandise.title === "billboard" &&
                  item.merchandise.product.title
                : item.merchandise.product.title,
            shopifyId: item.merchandise.id,
            lineId: item.id,
          });
        }
      });

      setCart(newCart);
      setCartId(response.id);

      localStorage.setItem(
        cartKey,
        JSON.stringify({
          products: newCart,
          checkout: response.checkoutUrl,
          estimatedCost: response.estimatedCost,
          cardId: response.id,
        })
      );
    } else {
      localStorage.removeItem(cartKey);
    }
  }

  // ========================================================================================================================== //
  // ======================================================== ADD CART ======================================================== //
  // ========================================================================================================================== //

  async function addToCart(product) {
    setCartOpen(true);
    setDisabled(true);
    try {
      // ============================================================ //
      // ==================== Check if cart is new ================== //
      // ============================================================ //
      if (cart.length === 0) {
        let cartResponse = await createCart({
          quantity: product.quantity,
          merchandiseId: `${product.shopifyId}`,
        });

        setCheckoutUrl(cartResponse.checkoutUrl);
        setEstimatedCost(cartResponse.estimatedCost);
        setCartId(cartResponse.id);

        setCart([{ ...product, lineId: cartResponse.lines?.nodes[0].id }]);
        localStorage.setItem(
          cartKey,
          JSON.stringify({
            products: [
              {
                ...product,
                lineId: cartResponse.lines?.nodes[0].id,
                price: product.sellingPlanId
                  ? cartResponse.lines?.nodes[0].sellingPlanAllocation
                      ?.priceAdjustments[0].price.amount
                  : product.price,
              },
            ],
            checkout: cartResponse.checkoutUrl,
            estimatedCost: cartResponse.estimatedCost,
            cardId: cartResponse.id,
          })
        );
      } else {
        const glasHeadlessCart = JSON.parse(localStorage.getItem(cartKey));
        let cartResponse;

        cartResponse = await addItemToCart(glasHeadlessCart.cardId, {
          quantity: product.quantity,
          merchandiseId: product.shopifyId,
        });
        setCheckoutUrl(cartResponse.checkoutUrl);
        setEstimatedCost(cartResponse.estimatedCost);
        getCartData(glasHeadlessCart.cardId, glasHeadlessCart.products);
      }
    } catch (error) {
      console.error(error);
    }
    setDisabled(false);
  }

  // ========================================================================================================================== //
  // ====================================================== UPDATE CART ======================================================= //
  // ========================================================================================================================== //

  async function updateQuantityCart(product) {
    const glasHeadlessCart = JSON.parse(localStorage.getItem(cartKey));

    setDisabled(true);
    let newCart = [];
    try {
      const cartResponse = await updateCart(glasHeadlessCart.cardId, product);
      setCheckoutUrl(cartResponse.checkoutUrl);
      setEstimatedCost(cartResponse.estimatedCost);
      cartResponse.lines?.nodes.map((item) => {
        let added = false;
        cart.map((cartItem) => {
          if (cartItem.shopifyId === item.merchandise.id) {
            added = true;

            // if (cartResponse.lines?.nodes.length !== 1) {
            return newCart.push({
              ...cartItem,
              quantity: item.quantity,
              lineId: item.id,
              price: cartItem.sellingPlanId
                ? item.sellingPlanAllocation?.priceAdjustments[0].price.amount
                : cartItem.price,
            });
            // }
          }
        });
      });

      setCart(newCart);

      localStorage.setItem(
        cartKey,
        JSON.stringify({
          products: newCart,
          checkout: cartResponse.checkoutUrl,
          estimatedCost: cartResponse.estimatedCost,
          cardId: cartResponse.id,
        })
      );
    } catch (error) {
      console.error(error);
    }
    setDisabled(false);
  }

  async function removeFromCart(product) {
    const glasHeadlessCart = JSON.parse(localStorage.getItem(cartKey));

    setDisabled(true);
    let newCart = [];
    try {
      const cartResponse = await removeItemFromCart(
        glasHeadlessCart.cardId,
        product
      );
      setCheckoutUrl(cartResponse.checkoutUrl);
      setEstimatedCost(cartResponse.estimatedCost);
      cartResponse.lines?.nodes.map((item) => {
        let added = false;
        cart.map((cartItem) => {
          if (cartItem.shopifyId === item.merchandise.id) {
            added = true;
            return newCart.push({
              ...cartItem,
              quantity: item.quantity,
              lineId: item.id,
              price: cartItem.sellingPlanId
                ? item.sellingPlanAllocation?.priceAdjustments[0].price.amount
                : cartItem.price,
            });
          }
        });
      });

      setCart(newCart);

      localStorage.setItem(
        cartKey,
        JSON.stringify({
          products: newCart,
          checkout: cartResponse.checkoutUrl,
          estimatedCost: cartResponse.estimatedCost,
          cardId: cartResponse.id,
        })
      );
    } catch (error) {
      console.error(error);
    }
    setDisabled(false);
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        cartOpen,
        cartId,
        checkoutUrl,
        estimatedCost,
        disabled,
        setCartOpen,
        setCheckoutUrl,
        setEstimatedCost,
        setDisabled,
        setCartId,
        updateQuantityCart,
        removeFromCart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const ShopConsumer = CartContext.Consumer;
export default ShopProvider;
export { ShopConsumer, CartContext };
