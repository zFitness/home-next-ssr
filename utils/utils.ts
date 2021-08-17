import React from 'react';
import { Button } from 'antd';
import enquireJs from 'enquire.js';

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;
export const getChildrenToRender = (item: any, i: any) => {
  let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
  tag = item.href ? 'a' : tag;
  let children =
    typeof item.children === 'string' && item.children.match(isImg)
      ? React.createElement('img', { src: item.children, alt: 'img' })
      : item.children;
  if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
    // eslint-disable-next-line react/no-children-prop
    children = React.createElement(Button, {
      href: item.children.href,
      type: item.children.type,
      children: item.children.children,
      // icon: React.createElement('arrow-right-outlined')
      // ...item.children
    });
  }
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};

interface IEquireScreen {
  (isMobile: boolean): void;
}

// export function equireScreen(call: IEquireScreen) {
//   const handler = {
//     match: function () {
//       call && call(true);
//     },

//     unmatch: function () {
//       call && call(false);
//     },
//   };
//   enquireJs.register('only screen and (max-width:767.99px)', handler);
// }
