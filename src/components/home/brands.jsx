import React from "react";

const Brands = ({ title }) => {
  return (
    <div className="flex">
      <div className="w-min overflow-x-visible text-2xl marquee-container">
        <div className="marquee">
          <h2 className="text-transform-uppercase">{title}</h2>
          <h2 className="text-transform-uppercase">{title}</h2>
          <h2 className="text-transform-uppercase">{title}</h2>
          <h2 className="text-transform-uppercase">{title}</h2>
        </div>
        <div className="marquee">
          <h2 className="text-transform-uppercase">{title}</h2>
          <h2 className="text-transform-uppercase">{title}</h2>
          <h2 className="text-transform-uppercase">{title}</h2>
          <h2 className="text-transform-uppercase">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Brands;
