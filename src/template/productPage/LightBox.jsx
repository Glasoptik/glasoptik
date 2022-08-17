import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { RichText, Elements } from "prismic-reactjs";

const LightBox = ({ openLightbox, changeState }) => {
  const data = useStaticQuery(graphql`
    {
      prismicLightboxModal {
        data {
          title {
            text
          }
          description {
            richText
          }
          button_text
          email
        }
      }
    }
  `);
  const lightBoxData = data.prismicLightboxModal.data;
  return (
    <div
      className={`w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white/80 
    transition-opacity duration-200 ease-linear px-[13px] ${
      openLightbox ? "block" : "hidden"
    }`}
      onClick={changeState}
    >
      <div
        className="relative max-w-[824px] w-full  border border-solid border-black mx-auto mt-20 md:mt-56 
    pt-12 md:pt-[72px] pb-[90px] md:pb-[155px] flex flex-col items-center text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-3xl font-thin leading-9 uppercase tracking-[0px]">
          {lightBoxData.title.text}
        </h1>
        <div className="w-full mt-8 mb-20 prose px-2">
          <RichText render={lightBoxData.description.richText} />
        </div>
        <a
          href={`mailto:${lightBoxData.email}`}
          className="max-w-[250px] md:max-w-[314px] h-[54px] w-full uppercase border-[0.75px] border-solid border-black box-border 
          transition-colors duration-200 ease-linear flex items-center justify-center"
        >
          {lightBoxData.button_text}
        </a>
      </div>
    </div>
  );
};

export default LightBox;
