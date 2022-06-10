import React, { useEffect, useRef, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "../common/link";
import { Nav, NavItem } from "./nav";

const Header = ({ stickToTop, data }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [hideUp, setHideUp] = useState(false);
  const yRef = useRef(0);

  useEffect(() => {
    const offsetTop = 80;
    setMobileNav(false);

    function handleScroll() {
      if (window.scrollY > offsetTop && yRef.current < window.scrollY) {
        setHideUp(true);
      } else {
        setHideUp(false);
      }
      yRef.current = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setMobileNav, setHideUp]);

  return (
    <header
      className={`${hideUp ? "-translate-y-full" : ""} ${
        !stickToTop && "fixed"
      } top-0 left-0 z-50 max-w-[1440px] mx-auto w-full bg-white duration-300 text-[15px] px-5 sm:px-[74px]`}
    >
      <div className={`w-full flex justify-between h-[45px] mx-auto my-[52px]`}>
        <NavButton
          onClick={() => setMobileNav(!mobileNav)}
          mobileNav={mobileNav}
        />
        <Link className="relative z-50 inline-flex my-auto" to="/">
          <GatsbyImage
            image={data.logo.gatsbyImageData}
            alt="Logo"
            className="w-full h-full object-cover"
            objectFit="cover"
            loading="lazy"
            aria-placeholder="Logo"
          />
        </Link>
        <button className="relative z-50">BAG (0)</button>
        <Nav show={mobileNav}>
          {data.menu_items.map(({ title, link }, idx) => (
            <NavItem
              key={idx}
              title={title.text}
              to={link}
              onClick={() => setMobileNav(!mobileNav)}
            />
          ))}
        </Nav>
      </div>
    </header>
  );
};

function NavButton({ onClick, mobileNav }) {
  return (
    <button
      type="button"
      aria-label="Open navigation"
      onClick={onClick}
      className="relative z-50 focus:outline-none uppercase font-normal text-black"
    >
      {mobileNav && "Luk"} Menu
    </button>
  );
}

export default Header;
