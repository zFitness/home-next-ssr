import React from "react";
import { Row, Col } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

const GratitudeContent: React.FC = ({ ...props }) => {
  const arr = [
    "/img/tencent.svg",
    "/img/mayi.svg",
    "https://img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg",
  ];

  return (
    <div className="home-page-wrapper content12-wrapper">
      <div className="home-page content12">
        <div key="title" className="title-wrapper">
          <h1 className="title-h1">特别鸣谢</h1>
          {/* {dataSource.titleWrapper.children.map(getChildrenToRender)} */}
        </div>
        {/* <OverPack className={`content-template`} playScale={0.3}> */}
        <TweenOneGroup
          component={Row}
          key="div"
          enter={{
            y: "+=30",
            opacity: 0,
            type: "from",
            ease: "easeOutQuad",
          }}
          leave={{ y: "+=30", opacity: 0, ease: "easeOutQuad" }}
          className="img-wrapper"
        >
          {arr.map((item) => (
            <Col key={item} className="block" md={8} xs={24}>
              <div className="block-content">
                <span>
                  <img src={item} alt="img" />
                </span>
              </div>
            </Col>
          ))}
        </TweenOneGroup>
        {/* </OverPack> */}
      </div>
    </div>
  );
};

export default GratitudeContent;
