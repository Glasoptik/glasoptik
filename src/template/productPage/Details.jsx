import React, { useContext, useEffect, useState } from "react";
import { getPrice } from "../../components/helper/getPrice";
import parse from "html-react-parser";
import { CartContext } from "../../context/ShopContext.jsx";

const Details = ({ product, changeState }) => {
  const { addToCart, disabled } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [productVariant, setProductVariant] = useState({});
  console.log(product);
  const [variant, setVariant] = useState(product.variants[0]);

  useEffect(() => {
    setProductVariant({
      productId: product.shopifyId,
      shopifyId: variant.shopifyId,
      title: product.title,
      handle: product.handle,
      availableForSale: variant.availableForSale,
      price: variant.price,
      image: product.featuredImage.src,
      quantity: quantity,
    });
  }, [quantity, variant]);

  function handleSubmit(e) {
    e.preventDefault();
    if (productVariant.availableForSale) {
      addToCart(productVariant);
    } else {
      changeState();
    }
  }

  return (
    <div className="lg:flex-[0.45] xl:flex-[0.42] max-w-[498px] w-full h-full relative">
      <div className="mt-[58px]">
        <h1 className="text-[25px] leading-5 font-bold">{product.title}</h1>
        <h3 className="text-xl leading-5 font-bold mt-[17px] mb-[50px]">
          {getPrice(product.priceRangeV2)}
        </h3>
        <h5 className="text-[15px] font-bold mb-[35px]">
          FARVE:<span className="font-normal"> Slate Gray Lenses</span>
        </h5>
        <button
          className="w-full h-[53px] text-center border-[0.75px] border-solid border-black box-border mb-[72px] transition-colors duration-200 ease-linear
        hover:bg-black hover:text-white"
          onClick={handleSubmit}
          disabled={disabled}
        >
          <span className="text-[15px] font-bold leading-5 uppercase">
            Tilføj til bag
          </span>
        </button>
        <div className="text-[15px] leading-5">
          {parse(product.descriptionHtml)}
        </div>
      </div>
    </div>
  );
};

export default Details;
