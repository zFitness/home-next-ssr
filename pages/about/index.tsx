/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BasicInfo from "./BasicInfo";
require("./less/index.less");
import SkillStack from "./SkillStack";

const About: React.FC = () => {
  const [isMobile, setMobile] = useState<boolean>(false);

  return (
    <div className="templates-wrapper">
      <BasicInfo />
      <SkillStack />
    </div>
  );
};

export default About;
