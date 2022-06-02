import React from "react";
import ProductsSelection from "../../components/common/productsSelection";
import Details from "./Details";
import Gallery from "./gallery";

const ProductPage = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col md:flex-row space-x-14 mb-8">
        <Gallery />
        <Details />
      </div>
      <ProductsSelection
        title="GLAS ONLINE SELEKTION"
        buttonText="Gå til webbutik"
      />
    </div>
  );
};

export default ProductPage;
