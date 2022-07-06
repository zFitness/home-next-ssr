import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button, Col, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const SkillStack: React.FC = () => {
  // console.log(tagProps);

  const animType = {
    queue: 'bottom',
    one: {
      y: '+=30',
      opacity: 0,
      type: 'from',
      ease: 'easeOutQuad',
    },
  };

  const banner = {
    img: '/img/undraw_static_website_0107.svg',
  };

  return (
    <div className="stack-page-wrapper stack">
      <div className="stack-page stack-page">
        <div className="stack-title-wrapper">
          <h1 className="title-h1">技术栈</h1>
        </div>
      </div>
    </div>
  );
};

export default SkillStack;
