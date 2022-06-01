import React from "react";
import Link from "../common/link";

const Footer = ({ footer }) => {
  return (
    <div className="px-5 sm:px-[74px] pt-24 border-t border-solid border-[#57C65F]">
      <div className="grid grid-cols-2 md:grid-cols-3 items-baseline lg:flex lg:items-start lg:justify-between min-h-[325px] h-full space-y-5 pb-5">
        {footer.map((item, index) => (
          <FooterItem key={index} Item={item.footer_section.document.data} />
        ))}
      </div>
    </div>
  );
};

export default Footer;

function FooterItem({ Item }) {
  return (
    <div className="flex flex-col items-start text-[15px] leading-[17px] text-center lg:text-left">
      <h6 className="text-[#947070] mb-[25px] text-center lg:text-left w-full">
        {Item.menu_title.text}
      </h6>
      <ul className="w-full">
        {Item.item.map((item, index) => {
          if (item.link) {
            console.log("Link");
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