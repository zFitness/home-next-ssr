import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button, Col, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const ProjectList: React.FC = () => {
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

  return (
    <div className="about-page-wrapper projects">
      <Row className="about-page projects-page">
        <QueueAnim
          key="text"
          type={animType.queue}
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          className="projects-title-wrapper"
          component={Col}
          componentProps={{
            md: 12,
          }}
        >
          <h1 className="projects-title">作品</h1>
          <div className="projects-content">
            <span>
              <span>
                <p>待开发</p>
                {/* <p>本站点使用 react + ts 开发。</p> */}
              </span>
            </span>
          </div>
        </QueueAnim>
      </Row>
    </div>
  );
};

export default ProjectList;
