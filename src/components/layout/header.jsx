import React, { useContext, useEffect, useRef, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "../common/link";
import { Nav, NavItem } from "./nav";
import { CartContext } from "../../context/ShopContext";

const Header = ({ stickToTop, data }) => {
  const { cart } = useContext(CartContext);
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
      className={` ${
        hideUp ? "-translate-y-full" : ""
      } fixed top-0 left-0 z-50 w-full bg-white duration-300 `}
    >
      <div
        className={`max-w-[1440px] mx-auto w-full flex items-center justify-between h-[45px] my-5 md:my-[52px] text-[15px] px-5 sm:px-[74px]`}
      >
        <NavButton
          onClick={() => setMobileNav(!mobileNav)}
          mobileNav={mobileNav}
        />
        <Link
          className="max-w-[120px] w-full relative z-50 inline-flex my-auto text-center"
          to="/glas"
        >
          {data.logo.gatsbyImageData && (
            <GatsbyImage
              image={data.logo.gatsbyImageData}
              alt="Logo"
              className="max-w-[80px] max-h-[40px] sm:max-w-[100px] mx-auto w-full sm:max-h-full h-full object-contain"
              objectFit="contain"
              loading="eager"
            />
          )}
        </Link>
        <Link
          to="/cart"
          className="relative z-50 max-w-[120px] w-full text-right"
        >
          BAG ({cart.length})
        </Link>
        <Nav show={mobileNav}>
          {data.menu_items.map(({ title, link }, idx) => (
            <NavItem
              key={idx}
              title={title.text}
              to={link}
              onClick={() => setMobileNav(!mobileNav)}
            />
          ))}
          <li
            className="relative"
            onClick={() => setMobileNav(!mobileNav)}
            onKeyDown={() => setMobileNav(!mobileNav)}
            role="presentation"
          >
            <Link
              to="https://appointments.optikit.dk/da/NThlYmFlZGMtNmQ4OS00YTJmLTlhYWQtYzFiZjc0MGI3OGY2?store=2560"
              className="flex items-center w-full text-xs uppercase font-normal  mt-5"
            >
              BOOK SYNSPRØVE
            </Link>
          </li>
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
      className="max-w-[120px] w-full relative z-50 focus:outline-none uppercase font-normal text-black text-left"
    >
      {mobileNav && "Luk"} Menu
    </button>
  );
}

export default Header;
