import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { RichText, Elements } from "prismic-reactjs";

const LightBox = ({ changeState }) => {
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
    <div className="w-full h-full mb-[400px] md:mb-[600px]">
      <div
        className="max-w-[824px] w-full h-full min-h-[200px] border border-solid border-black mx-auto mt-16 md:mt-28 
    pt-12 md:pt-[72px] pb-[90px] md:pb-[155px] flex flex-col items-center text-center"
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
