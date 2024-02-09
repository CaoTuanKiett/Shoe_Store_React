import React from "react";
import Head from "../component/shared/Head";
import Footer from "../component/shared/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  return (
    <div className="w-full flex flex-col items-center relative ">
      <Head />
      {props.children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
