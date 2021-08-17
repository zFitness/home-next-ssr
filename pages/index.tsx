import React, { useEffect, useState } from "react";

import {
  Nav30DataSource,
  Pricing00DataSource,
  Pricing01DataSource,
  otherLinks,
} from "../data.source";
import enquireJs from "enquire.js";
import { enquireScreen } from "../utils/enquire";

import { Button } from "antd";
import Banner from "../components/home/Banner";
import OtherLinks from "../components/home/OtherLinks";
import Product from "../components/home/Product";
import Header from "../components/home/Header";
import Content from "../components/home/Content";
import Footer from "../components/home/Footer";

require("../components/home/less/antMotionStyle.less");

const Index = () => {
  const [isMobile, setMobile] = useState<boolean>(false);
  const [location, setLocation] = useState<Location>();
  useEffect(() => {
    enquireScreen((res: boolean) => {
      setMobile(res);
    });
    if (window) {
      setLocation(window.location);
    }
  }, []);

  return (
    <div>
      {/* <Header
        dataSource={Nav30DataSource}
        isMobile={isMobile}
        location={location}
      /> */}
      <Banner />
      <Content />
      <div className="home-page-wrapper pricing0-wrapper">
        <div className="pricing0-title-wrapper">
          <h1 className="title-h1">最新作品</h1>
        </div>
        <Product
          key="Pricing0_0"
          dataSource={Pricing00DataSource}
          isMobile={isMobile}
          index={0}
        />
        <Product
          key="Pricing0_1"
          dataSource={Pricing01DataSource}
          isMobile={isMobile}
          index={1}
        />
        <div className="pricing0-button-wrapper">
          <Button type="primary" size="large">
            查看所有作品
          </Button>
        </div>
      </div>
      <OtherLinks key="Feature7_0" data={otherLinks} />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
