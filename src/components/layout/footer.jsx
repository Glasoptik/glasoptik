// import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Link from "../common/link";

const Footer = ({ footer, noBorder }) => {
  return (
    <footer
      className={`pt-24 ${
        noBorder
          ? "border-none sm:border-t sm:border-solid border-t-black"
          : "border-t border-solid border-t-black"
      }  mt-[215px]`}
    >
      <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-[74px]">
        <div className="grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-3 items-baseline lg:flex lg:items-baseline lg:justify-between h-fit mb-14 md:mb-[105px] space-y-9 md:space-y-5 pb-5">
          {footer.footer.map((item, index) => (
            <FooterItem key={index} Item={item.footer_section.document.data} />
          ))}
        </div>
        {/* <div className="flex md:hidden flex-col items-center justify-center mt-9 text-[10px] leading-3 space-y-2 mb-11 uppercase">
          <Link
            state={{ index: 1 }}
            to={footer.handel_betingelser_link}
            className="text-center"
          >
            {footer.handel_betingelser_text}
          </Link>
          <Link
            state={{ index: 0 }}
            to={footer.privapolitik_link}
            className="text-center"
          >
            {footer.privapolitik_text}
          </Link>
          <Link
            state={{ index: 2 }}
            to={footer.returnering_link}
            className="text-center"
          >
            {footer.returnering_text}
          </Link>
          <Link
            state={{ index: 3 }}
            to={footer.cookies_link}
            className="text-center"
          >
            {footer.cookies_text}
          </Link>
        </div> */}
        {/* <div className="w-full flex justify-center md:justify-start mb-9">
          <GatsbyImage
            image={footer.payment_logo_desktop.gatsbyImageData}
            alt={footer.payment_logo_desktop.alt || ""}
            objectFit="contain"
            className="w-[245px] h-[35px]"
          />
        </div> */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between text-[10px] leading-3 text-[#646464] mb-6 uppercase">
          <Link to={footer.website_link.url}>{footer.website_text}</Link>
          <div className="w-fit space-y-2 md:space-y-0 md:space-x-8 flex items-center">
            {/* <Link
              state={{ index: 1 }}
              to={footer.handel_betingelser_link}
              className="hidden md:block text-black text-center"
            >
              {footer.handel_betingelser_text}
            </Link>
            <Link
              state={{ index: 2 }}
              to={footer.returnering_link}
              className="hidden md:block text-black text-center"
            >
              {footer.returnering_text}
            </Link>
            <Link
              state={{ index: 0 }}
              to={footer.privapolitik_link}
              className="hidden md:block text-black text-center"
            >
              {footer.privapolitik_text}
            </Link>
            <Link
              state={{ index: 3 }}
              to={footer.cookies_link}
              className="hidden md:block text-black text-center"
            >
              {footer.cookies_text}
            </Link> */}
            <span className="text-center">
              © {new Date().getFullYear()} GLAS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function FooterItem({ Item }) {
  return (
    <div className="flex flex-col items-start text-[15px] leading-[17px] text-center  md:text-left">
      <h6 className="text-[#999999] mb-[25px] text-center md:text-left w-full">
        {Item.menu_title.text}
      </h6>
      <ul className="w-full">
        {Item.item.map((item, index) => {
          if (item.link) {
            return (
              <li key={index} className="mb-[9px]">
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          } else {
            return (
              <li key={index} className="mb-[9px]">
                <span>{item.title}</span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
