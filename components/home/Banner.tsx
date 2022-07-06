import React from "react";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { IAnimObject } from "rc-tween-one/typings/AnimObject";
import Image from "next/image";

const Banner: React.FC = () => {
  // console.log(tagProps);

  const animType = {
    queue: "bottom",
    one: {
      y: "+=30",
      opacity: 0,
      type: "from",
      ease: "easeOutQuad",
    } as IAnimObject,
  };

  const banner = {
    img: "/img/undraw_static_website_0107.svg",
  };

  return (
    <div className="home-page-wrapper banner5">
      <div className="home-page banner5-page">
        <QueueAnim
          key="text"
          // type={animType.queue}
          leaveReverse
          ease={["easeOutQuad", "easeInQuad"]}
          className="banner5-title-wrapper"
          // componentProps={{
          //   md: dataSource.childWrapper.md,
          //   xs: dataSource.childWrapper.xs,
          // }}
        >
          <h1 className="banner5-title">
            <span>
              <p>{"Full-Stack"}</p>
            </span>
          </h1>
          <div className="banner5-explain">
            <span>
              <p>Web Engineer</p>
            </span>
          </div>
          <div className="banner5-content">
            <span>
              <span>
                <p>
                  您好， 我是 zfitness， Web前端工程师。热爱编程，热爱技术。
                </p>
              </span>
            </span>
          </div>
          <div className="banner5-button-wrapper">
            <Button>
              了解更多
              <ArrowRightOutlined />
            </Button>
          </div>
        </QueueAnim>
        <TweenOne
          animation={animType.one}
          key="title"
          className="banner5-image"
        >
          <img src={banner.img} width="100%" alt="img" />
          {/* <Image
            loader={({ src }) => {
              return src;
            }}
            className=""
            unoptimized
            src={banner.img}
            alt="banner"
            layout="fill"
          /> */}
        </TweenOne>
      </div>
    </div>
  );
};

export default Banner;
