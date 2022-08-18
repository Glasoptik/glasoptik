import React, { useState } from "react";
import { graphql } from "gatsby";
import Reveal from "../components/common/reveal";
const Policies = ({ data }) => {
  const policies = data.prismicPolicies.data;
  const [selectedPolicy, setSelectedPolicy] = useState({
    id: 0,
    ...policies.policy[0],
  });
  return (
    <div className="max-w-[1440px] w-full overflow-x-visible flex justify-between box-border mx-auto px-5 sm:px-[74px] space-x-[66px] pt-4 mt-[105px] md:mt-40">
      <div className="flex flex-col items-start max-w-max md:max-w-xs w-full space-y-2">
        {policies.policy.map((policy, index) => (
          <button
            onClick={() => setSelectedPolicy({ id: index, ...policy })}
            key={index}
            className={`text-[15px] leading-6 font-medium ${
              selectedPolicy.id === index && "text-[#999999]"
            }`}
          >
            {policy.title.text}
          </button>
        ))}
      </div>
      <div className="max-w-xl w-full">
        <h1 className="font-medium text-[15px] leading-[18px] mb-5">
          {selectedPolicy.title.text}
        </h1>
        <Reveal
          effect="animate-fade-up"
          className="prose opacity-0 whitespace-pre-wrap text-[15px] leading-[25px]"
          dangerouslySetInnerHTML={{ __html: selectedPolicy.description.html }}
        />
      </div>
      <div className="max-w-xs w-full hidden md:block invisible" />
    </div>
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
        }
      }
    }
  }
`;
