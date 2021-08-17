import React from "react";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { Row, Col, Button } from "antd";
import { getChildrenToRender } from "../../utils/utils";

const Product = (props: any) => {
  const { ...tagProps } = props;
  const { dataSource, isMobile, index } = tagProps;

  const animType = {
    queue: isMobile ? "bottom" : "right",
    one: isMobile
      ? {
          scaleY: "+=0.3",
          opacity: 0,
          type: "from",
          ease: "easeOutQuad",
        }
      : {
          x: "-=30",
          opacity: 0,
          type: "from",
          ease: "easeOutQuad",
        },
  };

  const textBlock = (
    <Col md={12} xs={24} key="text">
      <QueueAnim
        key="text"
        // type={animType.queue}
        leaveReverse
        ease={["easeOutQuad", "easeInQuad"]}
        className="pricing0-text-wrapper"
      >
        <h1 className="pricing0-title">校园闲置</h1>
        <div className="pricing0-content">
          校园闲置是一款供学校使用的校园闲置平台， 使用 Vue/Vuex/VueRouter
          进行开发。
        </div>
        <div className="pricing0-pricing"></div>
        <Button>了解更多</Button>
        {/* {dataSource.childWrapper.children.map(getChildrenToRender)} */}
      </QueueAnim>
    </Col>
  );

  const imgBlock = (
    <Col md={12} xs={24} key="img">
      <TweenOne animation={animType.one} resetStyle {...dataSource.imgWrapper}>
        <span {...dataSource.img}>
          <img src={dataSource.img.children} width="100%" alt="img" />
        </span>
      </TweenOne>
    </Col>
  );

  return (
    // <OverPack component={Row} className="home-page pricing0" playScale="0.3">
    <Row className="home-page pricing0">
      {index % 2 || isMobile ? [imgBlock, textBlock] : [textBlock, imgBlock]}
    </Row>
    // </OverPack>
  );
};

export default Product;
