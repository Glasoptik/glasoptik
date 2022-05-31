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
          <div className="h-full pt-16">
            <div className="flex flex-col justify-center h-full">
              <ul className="container flex flex-col justify-center flex-grow px-6 mx-auto">
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
        activeClassName="after:content-['—']"
        className="flex items-center w-full my-2 text-4xl font-bold uppercase"
      >
        {title}
      </Link>
    </li>
  );
}
