import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "../components/common/link";
import Reveal from "../components/common/reveal";
import Layout from "../components/layout";
import { SEO } from "../components/seo";

const Services = ({ data }) => {
  const servicesData = data.prismicServices.data;
  return (
    <Layout>
      <SEO title="Services - GLASOPTIK" pathname="services" />
      <div className="max-w-[1440px] w-full overflow-x-visible flex flex-col sm:flex-row box-border mx-auto px-5 sm:px-[74px] sm:space-x-10 md:space-x-[66px] pt-[10px] mt-[105px] md:mt-40">
        <div className="max-w-[452px] w-full">
          <GatsbyImage
            image={servicesData.hero_image.gatsbyImageData}
            alt={servicesData.hero_image.alt || "Services Hero Image"}
          />
        </div>
        <div className="max-w-[584px] w-full mt-10 sm:mt-0">
          {servicesData.services.map((service, index) => (
            <div className="w-full mb-28" key={index}>
              <h2 className="text-3xl font-thin leading-[18px] tracking-[0.4px] mb-8">
                {service.title.text}
              </h2>
              <Reveal
                effect="animate-fade-up"
                className="prose opacity-0 whitespace-pre-wrap text-[15px] leading-[25px]"
                dangerouslySetInnerHTML={{ __html: service.description.html }}
              />
              <div className="w-full mt-[52px] space-x-[45px] flex items-center text-[15px] uppercase">
                <Link to={service.button_link} className="leading-[17px]">
                  {service.button_text}
                </Link>
                <Link to={service.button_link}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="76"
                    height="7"
                    viewBox="0 0 76 7"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
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
          ))}
          <h2></h2>
        </div>
      </div>
    </Layout>
  );
};

export default Services;

export const query = graphql`
  {
    prismicServices {
      data {
        hero_image {
          alt
          gatsbyImageData(
            srcSetMaxWidth: 500
            layout: FULL_WIDTH
            placeholder: NONE
          )
        }
        services {
          title {
            text
          }
          description {
            html
          }
          button_text
          button_link
        }
      }
    }
  }
`;
