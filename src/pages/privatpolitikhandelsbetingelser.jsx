import React, { useState } from "react";
import { graphql } from "gatsby";
import Reveal from "../components/common/reveal";
import Layout from "../components/layout";
import { Document, Page, pdfjs } from "react-pdf";
import { GatsbyImage } from "gatsby-plugin-image";

const Policies = ({ data, location }) => {
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }
  const policies = data.prismicPolicies.data;
  const [selectedPolicy, setSelectedPolicy] = useState({
    id: location.state?.index || 0,
    ...policies.policy[location.state?.index || 0],
  });

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Layout>
      <div
        className="max-w-[1440px] w-full overflow-x-visible flex flex-col sm:flex-row sm:justify-between box-border mx-auto px-5 sm:px-[74px] 
      sm:space-x-[66px] pt-4 mt-[105px] md:mt-40"
      >
        <div className="flex flex-col items-start max-w-max md:max-w-xs w-full space-y-2">
          {policies.policy.map((policy, ind) => (
            <button
              onClick={() => setSelectedPolicy({ id: ind, ...policy })}
              key={ind}
              className={`text-xs sm:text-[15px] sm:leading-6 font-medium ${
                selectedPolicy.id === ind && "text-[#999999]"
              }`}
            >
              {policy.title.text}
            </button>
          ))}
        </div>
        <div className="mt-10 sm:mt-0 sm:max-w-xl w-full">
          <h1 className="text-3xl font-thin mb-5">
            {selectedPolicy.title?.text}
          </h1>
          <Reveal
            effect="animate-fade-up"
            className="prose opacity-0 whitespace-pre-wrap text-[15px] leading-[25px]"
            dangerouslySetInnerHTML={{
              __html: selectedPolicy.description?.html,
            }}
          />
          {selectedPolicy.pdf_file.url && (
            <div className="w-full">
              <div className="flex items-center space-x-4 mb-[6px]">
                <a
                  className="uppercase text-[15px] leading-[25px]"
                  href={selectedPolicy.pdf_file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Print
                </a>
                <a
                  className="uppercase text-[15px] leading-[25px]"
                  href={selectedPolicy.pdf_file.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </div>
              <div className="max-w-xs sm:max-w-[540px] overflow-hidden w-full h-full object-contain">
                <GatsbyImage
                  image={selectedPolicy.image.gatsbyImageData}
                  alt={selectedPolicy.image.alt || "PDF IMG"}
                  objectFit="cover"
                />
              </div>
            </div>
          )}
        </div>
        <div className="max-w-xs w-full hidden md:block invisible" />
      </div>
    </Layout>
  );
};

export default Policies;

export const query = graphql`
  {
    prismicPolicies {
      data {
        policy {
          title {
            text
          }
          description {
            html
          }
          pdf_file {
            url
          }
          image {
            url
            gatsbyImageData
            alt
          }
        }
      }
    }
  }
`;
