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
          className="fixed top-0 left-0 z-20 w-full h-full bg-gray-100 overflow-auto"
        >
          <div className="max-w-[1440px] w-full h-full mx-auto pt-16 px-5 sm:px-[74px]">
            <div className="flex flex-col justify-center h-full">
              <ul className="container flex flex-col justify-center flex-grow mx-auto">
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
      <Link
        to={to}
        className="flex items-center w-full my-4 text-3xl font-medium uppercase"
      >
        {title}
      </Link>
    </li>
  );
}
