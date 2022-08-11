import { graphql } from "gatsby";
import React, { useContext } from "react";
import Link from "../components/common/link";
import { RichText, Elements } from "prismic-reactjs";
import { CartContext } from "../context/ShopContext";
import { GatsbyImage } from "gatsby-plugin-image";

const Cart = ({ data }) => {
  const cartContent = data.prismicCart.data;
  const { cart, estimatedCost, checkoutUrl, updateQuantityCart, disabled } =
    useContext(CartContext);

  function handleUpdateCart(product) {
    updateQuantityCart(product);
  }

  function handleCheckout(e) {
    e.preventDefault();
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  }

  console.log(cart);
  return (
    <div className="overflow-x-hidden mt-40 max-w-[1440px] w-full mx-auto px-5 sm:px-[74px]">
      <h1 className="text-[32px] md:text-[45px] font-bold uppercase">
        {cartContent.title.text}
      </h1>
      <div className="w-full flex flex-col-reverse md:flex-row items-start justify-between mt-5 md:mt-20 md:space-x-5">
        {/* Cart Items */}
        <div className="w-full flex flex-col space-y-3">
          {cart.length > 0 ? (
            cart.map((item, key) => (
              <div key={key} className="flex flex-col xl:flex-row items-start">
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
                    <div className=" flex items-center border border-solid border-gray-300 box-border rounded-sm">
                      <button
                        disabled={disabled}
                        className="border-none h-full px-3 py-2 hover:bg-gray-100 transform transition-colors duration-150"
                        onClick={() =>
                          handleUpdateCart({
                            ...item,
                            quantity: item.quantity - 1,
                          })
                        }
                      >
                        -
                      </button>
                      <div className="">{`Qty : ${item.quantity}`}</div>
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
                  <h3 className="text-[10px] leading-5 mt-8 mb-7 text-[#999990]">
                    fjern produkt fra bag
                  </h3>
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
        <div className="md:max-w-[362px] w-full md:p-6 flex flex-col border-none md:border-[0.75px] md:border-solid border-black">
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
            <h3 className="text-[15px] ">Forsendels</h3>
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
            onClick={handleCheckout}
            className="w-full h-[53px] text-center border-[0.75px] border-solid border-black box-border transition-colors duration-200 ease-linear
        hover:bg-black hover:text-white mb-4"
          >
            <span className="text-[15px] font-bold leading-5">
              Gå til betaling
            </span>
          </button>
          <div className="w-full flex-col items-center hidden md:flex">
            <h6 className="text-[10px]">Sikker Betaling</h6>
            <div className="flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDgg_TIrhL30HFuvqHN-M0v7ZOfbI0BM7dn4UE7pv&s"
                alt="PayPal"
                className="w-14 h-14 object-contain"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDgg_TIrhL30HFuvqHN-M0v7ZOfbI0BM7dn4UE7pv&s"
                alt="PayPal"
                className="w-14 h-14 object-contain"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDgg_TIrhL30HFuvqHN-M0v7ZOfbI0BM7dn4UE7pv&s"
                alt="PayPal"
                className="w-14 h-14 object-contain"
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDgg_TIrhL30HFuvqHN-M0v7ZOfbI0BM7dn4UE7pv&s"
                alt="PayPal"
                className="w-14 h-14 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[800px] mt-10 mb-5 prose">
        <RichText render={cartContent.description.richText} />
      </div>
      <div className="w-full mt-10 sm:mt-[90px] space-x-10 sm:space-x-24 flex items-center justify-start text-[15px] uppercase">
        <Link
          to={`/${cartContent.button_link}`}
          className="leading-8 sm:leading-[50px]"
        >
          {cartContent.button_text}
        </Link>
        <Link to={`/${cartContent.button_link}`}>
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
      }
    }
  }
`;
