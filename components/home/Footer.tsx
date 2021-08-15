import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

const Footer: React.FC = () => {
  return (
    <div className="home-page-wrapper footer0-wrapper">
      <OverPack className="home-page footer0" playScale={0.05}>
        <TweenOne
          animation={{ y: "+=30", opacity: 0, type: "from" }}
          key="footer"
          className="copyright"
        >
          <span>
            ©2021 <a href="https://zmblog.wang">zfitness</a> All Rights Reserved
          </span>
        </TweenOne>
      </OverPack>
    </div>
  );
};

export default Footer;
