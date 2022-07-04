import { graphql } from "gatsby";
import React from "react";
import Link from "../components/common/link";

const Contact = ({ data }) => {
  const contactData = data.prismicContactUs.data;
  return (
    <div className="w-full overflow-x-visible flex flex-col items-center pt-5 box-border text-black mt-40">
      <div className="text-center flex flex-col mb-20">
        <h2 className="text-[15px] leading-[18px] tracking-[0.4px] font-medium uppercase mb-[18px]">
          {contactData.contact_title.text}
        </h2>
        <Link
          className="text-[15px] leading-[17px] mb-[11px]"
          to={`tel:${contactData.telefon}`}
        >
          <span className="uppercase">Telefon:</span> {contactData.telefon}
        </Link>
        <Link
          className="text-[15px] leading-[17px] mb-[11px]"
          to={`mailto:${contactData.mail}`}
        >
          <span className="uppercase">Mail:</span> {contactData.mail}
        </Link>
      </div>
      <div className="text-center flex flex-col mb-20">
        <h2 className="text-[15px] leading-[18px] tracking-[0.4px] font-medium uppercase mb-[18px]">
          {contactData.timings.text}
        </h2>
        <p
          effect="animate-fade-up"
          className="prose whitespace-pre-wrap text-[15px] leading-[25px] mb-[11px]"
        >
          {contactData.timings_detail}
        </p>
      </div>
      <div className="text-center flex flex-col mb-20">
        <h2 className="text-[15px] leading-[18px] tracking-[0.4px] font-medium uppercase mb-[18px]">
          {contactData.adresses_title.text}
        </h2>
        <p
          effect="animate-fade-up"
          className="prose whitespace-pre-wrap text-[15px] leading-[25px] mb-[11px]"
        >
          {contactData.adresses}
        </p>
      </div>
    </div>
  );
};

export default Contact;

export const query = graphql`
  {
    prismicContactUs {
      data {
        contact_title {
          text
        }
        telefon
        mail
        timings {
          text
        }
        timings_detail
        adresses_title {
          text
        }
        adresses
      }
    }
  }
`;
