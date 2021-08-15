import React, { useEffect, useState } from "react";

import "antd/dist/antd.css";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import { Nav30DataSource } from "../data.source";
import { enquireScreen } from "enquire-js";

export default function PageLayout({ children }: { children: JSX.Element }) {
  const [isMobile, setMobile] = useState<boolean>(false);
  useEffect(() => {
    enquireScreen((param: boolean) => {
      setMobile(param);
    });
  }, []);

  return (
    <div>
      <Header isMobile={isMobile} />
      {children}
      <Footer />
    </div>
  );
}
