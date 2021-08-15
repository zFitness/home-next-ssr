/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProjectList from "./projectList";
require("./less/index.less");

const Index: React.FC = () => {
  const [isMobile, setMobile] = useState<boolean>(false);

  return (
    <div className="templates-wrapper">
      <ProjectList />
    </div>
  );
};

export default Index;
