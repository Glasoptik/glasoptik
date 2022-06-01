import React from "react";
import Brands from "../components/home/brands";
import Hero from "../components/home/hero";
import SectionB from "../components/home/SectionB";
import SectionD from "../components/home/SectionD";
import useHome from "../queries/useHome";

const Home = () => {
  const data = useHome();
  console.log(data);
  return (
    <div className="w-full overflow-x-visible">
      <Hero sliders={data.slider_images} />
      <SectionB sectionb={data.section_b} />
      <Brands />
      <SectionD sectiond={data.section_d} />
    </div>
  );
};

export default Home;
