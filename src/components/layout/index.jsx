import React from "react";
import Header from "./header";
import useHeader from "../../queries/useHeader";

const Layout = ({ children }) => {
  const data = useHeader();

  return (
    <div className="w-full overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto w-full h-full overflow-x-visible">
        <Header stickToTop={true} data={data} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
