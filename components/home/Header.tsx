import React from "react";
import TweenOne from "rc-tween-one";
import { Menu } from "antd";
import { getChildrenToRender } from "../../utils/utils";
import { useState } from "react";
import { IAnimObject } from "rc-tween-one/typings/AnimObject";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCallback } from "react";

require("./less/navHeader.less");

const { Item, SubMenu } = Menu;

interface Props {
  isMobile: boolean;
  data?: any;
}

const HeaderNav: React.FC<Props> = ({ isMobile }) => {
  const [phoneOpen, setPhoneOpen] = useState<boolean>(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleRouteChange = useCallback((url) => {
    setSelectedKeys([url]);
  }, []);

  const router = useRouter();

  useEffect(() => {
    // 刷新时设置路径
    handleRouteChange(router.pathname);

    // 绑定路由变化事件
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [handleRouteChange, router.events, router.pathname]);

  const phoneClick = () => {
    setPhoneOpen(!phoneOpen);
  };

  const moment = phoneOpen === false ? 300 : undefined;
  const animal: IAnimObject = {
    x: 0,
    height: 0,
    duration: 300,
    onComplete: (e: any) => {
      if (phoneOpen) {
        e.target.style.height = "auto";
      }
    },
    ease: "easeInOutQuad",
  };

  return (
    <TweenOne
      id="Nav3_0"
      component="header"
      animation={{ opacity: 0, type: "from" }}
      className="header3 home-page-wrapper jzih1dpqqrg-editor_css"
    >
      <div className={`home-page${phoneOpen ? " open" : ""}`}>
        <Link href="/" passHref>
          <TweenOne
            animation={{ x: -30, type: "from", ease: "easeOutQuad" }}
            className="header3-logo jzjgnya1gmn-editor_css"
          >
            <img src="/logo.svg" alt="logo" width="32px"/>
            {/* <Image src="/logo.svg" width={40} height={40} alt="logo" /> */}
          </TweenOne>
        </Link>

        {isMobile && (
          <div
            className="header3-mobile-menu"
            onClick={() => {
              phoneClick();
            }}
          >
            <em />
            <em />
            <em />
          </div>
        )}
        <TweenOne
          className="header3-menu"
          animation={isMobile ? animal : undefined}
          moment={moment}
          reverse={!!phoneOpen}
        >
          <Menu
            mode={isMobile ? "inline" : "horizontal"}
            theme="light"
            multiple={false}
            selectedKeys={selectedKeys}
            onSelect={() => {
              setPhoneOpen(false);
            }}
          >
            {/* {navChildren} */}
            <Item key="/projects" className="header3-item">
              <Link href="/projects">作品</Link>
            </Item>
            <Item key="/about" className="header3-item">
              <Link href="/about">关于</Link>
            </Item>
            <Item key="github" className="header3-item">
              <a
                href="https://github.com/zFitness"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </Item>
          </Menu>
        </TweenOne>
      </div>
    </TweenOne>
  );
};

export default HeaderNav;
