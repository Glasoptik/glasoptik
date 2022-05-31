import React from "react";
import Hero from "../components/home/hero";
import useHome from "../queries/useHome";

const Home = () => {
  const data = useHome();
  console.log(data);
  return (
    <div>
      <h1 className="text-7xl mt-10">
        <div className="w-full">
          <Hero sliders={data.slider_images} />
        </div>
      </h1>
    </div>
  );
};

export default Home;
