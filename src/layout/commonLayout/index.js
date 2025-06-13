
import Header from "@/components/Header";

import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <main className="MainWrap">
      <Header />
      {/* <PageTransition duration="0.8s" easing="cubic-bezier(0.25, 0.1, 0.25, 1)"> */}
      {children}
      {/* </PageTransition> */}

    </main>
  );
};

export default CommonLayout;
