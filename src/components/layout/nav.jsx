import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "../common/link";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 4,
  },
  transition: {
    ease: "easeInOut",
    duration: 0.3,
  },
};

export function Nav({ show, children }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition="transition"
          className="fixed top-0 left-0 z-20 w-full h-full bg-white overflow-auto"
        >
          <div className="max-w-[1440px] w-full h-full mx-auto pt-16 px-5 sm:px-[74px]">
            <div className="flex flex-col justify-center h-ful">
              <ul className="container flex flex-col flex-grow mx-auto mt-12 sm:mt-[153px] space-y-[22px]">
                {children}
              </ul>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export function NavItem({ title, to, onClick }) {
  return (
    <li
      className="relative"
      onClick={onClick}
      onKeyDown={onClick}
      role="presentation"
    >
      <Link to={to} className="flex items-center w-full text-xl uppercase">
        {title}
      </Link>
    </li>
  );
}
