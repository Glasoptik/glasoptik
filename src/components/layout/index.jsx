import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto w-full h-full">
      <Header stickToTop={true} />
      {children}
    </div>
  );
};

export default Layout;
