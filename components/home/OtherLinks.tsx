import React from "react";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import Image from "next/image";

const OtherLinks: React.FC = ({ data }) => {
  return (
    <div className="home-page-wrapper feature7-wrapper">
      <div className="home-page feature7">
        <div className="feature7-title-wrapper">
          <h1 className="feature7-title-h1">更多资源</h1>
          <div className="feature7-title-content">一些有意思的网站</div>
        </div>
        <QueueAnim key="queue" type="bottom" leaveReverse interval={50}>
          <Row gutter={24} className="feature7-block-wrapper">
            {data.map((item) => (
              <Col md={6} xs={24} className="feature7-block" key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  className="feature7-block-group"
                  rel="noreferrer"
                >
                  <div className="feature7-block-image">
                    {/* <Image
                      loader={({ src }) => {
                        return src;
                      }}
                      src={item.cover}
                      alt={item.name}
                      layout="fill"
                    /> */}
                  </div>
                  <h1 className="feature7-block-title">{item.name}</h1>
                  <div className="feature7-block-content">{item.intro}</div>
                </a>
              </Col>
            ))}
          </Row>
        </QueueAnim>
      </div>
    </div>
  );
};

export default OtherLinks;
