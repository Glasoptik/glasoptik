import React from "react";
import Header from "./header";
import useHeader from "../../queries/useHeader";
import Footer from "./footer";
import useFooter from "../../queries/useFooter";

const Layout = ({ children }) => {
  const data = useHeader();
  const footer_data = useFooter();

  return (
    <div className="w-full overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto w-full h-full overflow-x-visible px-5 sm:px-[74px]">
        <Header stickToTop={true} data={data} />
        {children}
        <Footer footer={footer_data.footer} />
      </div>
    </div>
  );
};

export default Layout;
