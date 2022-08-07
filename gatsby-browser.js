import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Layout from "./src/components/layout";
import ShopProvider from "./src/context/ShopContext";
import "./src/styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function wrapPageElement({ element }) {
  return (
    <LazyMotion features={domAnimation}>
      <ShopProvider>
        <Layout>{element}</Layout>
      </ShopProvider>
    </LazyMotion>
  );
}
