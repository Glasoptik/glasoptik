import { graphql } from "gatsby";
import React, { useContext, useState } from "react";
import Link from "../components/common/link";
import { RichText, Elements } from "prismic-reactjs";
import { CartContext } from "../context/ShopContext";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";

const Cart = ({ data }) => {
  const cartContent = data.prismicCart.data;
  const [readPolicies, setReadPolicies] = useState(false);
  const {
    cart,
    estimatedCost,
    checkoutUrl,
    updateQuantityCart,
    disabled,
    removeFromCart,
  } = useContext(CartContext);

  function handleUpdateCart(product) {
    updateQuantityCart(product);
  }

  function handleCheckout(e) {
    e.preventDefault();
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  }

  return (
    <Layout>
      <div className="overflow-x-hidden max-w-[1440px] w-full mx-auto px-5 sm:px-[74px] mt-[105px] md:mt-40">
        <h1 className="text-[32px] md:text-[45px] font-bold uppercase">
          {cartContent.title.text}
        </h1>
        <div className="w-full flex flex-col-reverse md:flex-row items-start justify-between mt-5 md:mt-20 md:space-x-5">
          {/* Cart Items */}
          <div className="w-full flex flex-col space-y-3">
            {cart.length > 0 ? (
              cart.map((item, key) => (
                <div
                  key={key}
                  className="flex flex-col xl:flex-row items-start"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full xl:w-72 xl:h-72 object-cover"
                  />
                  <div className="flex flex-col justify-between xl:ml-14 mt-5">
                    <h3 className="text-[15px] md:text-[25px] font-bold">
                      {item.title}
                    </h3>
                    <h3 className="text-[13px] md:text-[15px] mt-7 mb-7">
                      Slate Gray Lenses
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center box-border rounded-sm">
                        <button
                          disabled={disabled}
                          className="border-none h-full pr-3 py-2 hover:bg-gray-100 transform transition-colors duration-150"
                          onClick={() =>
                            handleUpdateCart({
                              ...item,
                              quantity: item.quantity - 1,
                            })
                          }
                        >
                          -
                        </button>
                        <div className="">{`${item.quantity}`}</div>
                        <button
                          disabled={disabled}
                          className="border-none h-full px-3 py-2 hover:bg-gray-100 transform transition-colors duration-150"
                          onClick={() =>
                            handleUpdateCart({
                              ...item,
                              quantity: item.quantity + 1,
                            })
                          }
                        >
                          +
                        </button>
                      </div>
                      <h5 className="text-[15px]">{item.price} DKK</h5>
                    </div>
                    <button
                      className="w-max text-[10px] leading-5 mt-8 mb-7 text-[#999990] uppercase"
                      onClick={() => removeFromCart(item)}
                    >
                      fjern produkt fra bag
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-left">
                <h3 className="text-[15px] md:text-[25px] font-bold">
                  Du har ingen varer i posen
                </h3>
                <h3 className="text-[13px] md:text-[15px] mt-7 mb-7">
                  Vælg en vare og føj den til posen
                </h3>
              </div>
            )}
          </div>
          {/* Checkout Card */}
          <form
            onSubmit={handleCheckout}
            className="md:max-w-[362px] max-h-[340px] w-full md:p-6 flex flex-col border-none md:border-[0.75px] md:border-solid border-black"
          >
            <div className="flex items-center justify-between mb-[2px]">
              <h3 className="text-[15px] ">Subtotal ({cart.length})</h3>
              <h3 className="text-[15px] ">
                {estimatedCost
                  ? Number(estimatedCost.subtotalAmount.amount).toFixed(2)
                  : 0.0}{" "}
                {estimatedCost
                  ? estimatedCost.subtotalAmount.currencyCode
                  : "DKK"}
              </h3>
            </div>
            <div className="hidden md:flex items-center justify-between mb-8">
              <h3 className="text-[15px] ">Forsendelse</h3>
              <h3 className="text-[15px] ">
                {" "}
                {estimatedCost?.totalTaxAmount
                  ? Number(estimatedCost.totalTaxAmount.amount).toFixed(2)
                  : 0.0}{" "}
                {estimatedCost?.totalTaxAmount
                  ? estimatedCost.totalTaxAmount.currencyCode
                  : "DKK"}
              </h3>
            </div>
            <div className="hidden md:flex items-center justify-between mb-5">
              <h3 className="text-[15px] ">Total</h3>
              <h3 className="text-[15px] ">
                {" "}
                {estimatedCost
                  ? Number(estimatedCost.totalAmount.amount).toFixed(2)
                  : 0.0}{" "}
                {estimatedCost ? estimatedCost.totalAmount.currencyCode : "DKK"}
              </h3>
            </div>
            <button
              type="submit"
              className="w-full h-[53px] text-center border-[0.75px] border-solid border-black box-border transition-colors duration-200 ease-linear
        hover:bg-black hover:text-white mb-4"
            >
              <span className="text-[15px] font-bold leading-5">
                Gå til betaling
              </span>
            </button>
            <div className="w-full flex-col items-center flex">
              <div className="w-full flex items-center justify-center space-x-2 uppercase text-xs leading-5 mb-5 md:mb-3 md:mt-3">
                <input
                  type="checkbox"
                  name="read policies"
                  id="read_policies"
                  checked={readPolicies}
                  required
                  onChange={() => setReadPolicies(!readPolicies)}
                />
                <span>
                  Godkend{" "}
                  <Link
                    to="/privatpolitikhandelsbetingelser"
                    className="underline underline-offset-4"
                  >
                    handelsbetingelser
                  </Link>
                </span>
              </div>
              <h6 className="hidden md:block text-[10px]">Sikker Betaling</h6>
              <div className="hidden md:flex items-center mt-[6px]">
                <GatsbyImage
                  image={cartContent.payment_logo.gatsbyImageData}
                  alt={cartContent.payment_logo.alt || "Payment Options"}
                  className="w-full h-8 object-cover"
                  objectFit="contain"
                  loading="eager"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="max-w-[800px] mt-10 mb-5 prose">
          <RichText render={cartContent.description.richText} />
        </div>
        <div className="w-full mt-10 sm:mt-[90px] space-x-10 sm:space-x-24 flex items-center justify-start text-[15px] uppercase">
          <Link
            to={`${cartContent.button_link}`}
            className="leading-8 sm:leading-[50px]"
          >
            {cartContent.button_text}
          </Link>
          <Link to={`${cartContent.button_link}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="7"
              viewBox="0 0 76 7"
            >
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g
                  fill="#000"
                  fillRule="nonzero"
                  transform="translate(-1291 -730)"
                >
                  <g transform="translate(1156.5 732.5)">
                    <path d="M203.389-2.25l7 3.25-7 3.25-.001-3H134.75v-.5h68.638v-3z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;

export const query = graphql`
  {
    prismicCart {
      data {
        title {
          text
        }
        description {
          richText
        }
        button_text
        button_link
        payment_logo {
          gatsbyImageData
          alt
        }
      }
    }
  }
`;
