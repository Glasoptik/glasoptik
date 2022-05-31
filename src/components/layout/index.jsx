import React from "react";
import Header from "./header";
import useHeader from "../../queries/useHeader";

const Layout = ({ children }) => {
  const data = useHeader();

  return (
    <div className="container mx-auto w-full h-full">
      <Header stickToTop={true} data={data} />
      {children}
    </div>
  );
};

export default Layout;
