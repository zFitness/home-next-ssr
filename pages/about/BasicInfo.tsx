import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button, Col, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { IAnimObject } from 'rc-tween-one/typings/AnimObject';

const BasicInfo: React.FC = () => {
  // console.log(tagProps);

  const animType = {
    queue: 'bottom',
    one: {
      y: '+=30',
      opacity: 0,
      type: 'from',
      ease: 'easeOutQuad',
    } as IAnimObject
  };

  const banner = {
    img: '/img/undraw_static_website_0107.svg',
  };

  return (
    <div className="about-page-wrapper basic">
      <Row className="about-page basic-page">
        <QueueAnim
          key="text"
          // type={animType.queue}
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          className="basic-title-wrapper"
          component={Col}
          componentProps={{
            md: 12,
          }}
        >
          <h1 className="basic-title">关于我</h1>
          <div className="basic-content">
            <span>
              <span>
                <p>
                  您好， 我是 zfitness，
                  Web前端工程师。热爱编程，热爱技术。目前在鹅厂实习。
                </p>
                {/* <p>本站点使用 react + ts 开发。</p> */}
              </span>
            </span>
          </div>
        </QueueAnim>

        <TweenOne
          animation={animType.one}
          key="title"
          className="basic-image"
          component={Col}
          componentProps={{
            md: 12,
          }}
        >
          {/* <img
            src="https://gitee.com/zFitness/picture-bed/raw/master/img/OZQZfVMAnFiGn7q3-qw8QN_mg_aKJ8XXjpi6bpmG.jpg"
            width="100%"
            alt="img"
          /> */}
        </TweenOne>
      </Row>
    </div>
  );
};

export default BasicInfo;
