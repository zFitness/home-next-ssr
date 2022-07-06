import React from "react";
export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper jzih1dpqqrg-editor_css" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo jzjgnya1gmn-editor_css",
    children:
      "/img/DESIGN-WEB.svg",
  },
  Menu: {
    className: "header3-menu",
    children: [
      // {
      //   name: 'item1',
      //   className: 'header3-item',
      //   children: {
      //     href: '#',
      //     children: [{ children: <p>订订群</p>, name: 'text' }],
      //   },
      //   subItem: [
      //     {
      //       className: 'item-sub',
      //       children: {
      //         className: 'item-sub-item jzj8295azrs-editor_css',
      //         children: [
      //           {
      //             name: 'image0',
      //             className: 'item-image jzj81c9wabh-editor_css',
      //             children:
      //               'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*4_S6ToPfj-QAAAAAAAAAAABkARQnAQ',
      //           },
      //         ],
      //       },
      //       name: 'sub~jzj8hceysgj',
      //     },
      //   ],
      // },
      {
        name: "item4",
        className: "header3-item",
        children: {
          href: "/projects",
          children: [{ children: <p>作品</p>, name: "text" }],
        },
      },
      {
        name: "item3",
        className: "header3-item",
        children: {
          href: "/about",
          children: [{ children: <p>关于</p>, name: "text" }],
        },
      },
      {
        name: "item2",
        className: "header3-item",
        children: {
          href: "https://github.com/zFitness",
          target: "_blank",
          children: [{ children: <p>GITHUB</p>, name: "text" }],
        },
      },
    ],
  },
  mobileMenu: { className: "header3-mobile-menu" },
};

export const Pricing00DataSource = {
  wrapper: { className: "home-page-wrapper pricing0-wrapper" },
  OverPack: { playScale: 0.3, className: "home-page pricing0" },
  imgWrapper: { className: "pricing0-img-wrapper", md: 12, xs: 24 },
  img: {
    className: "pricing0-img",
    name: "image",
    children: "/img/xx.png",
  },
  childWrapper: {
    className: "pricing0-text-wrapper",
    md: 12,
    xs: 24,
    children: [
      {
        name: "title",
        children: "校园闲置",
        className: "pricing0-title",
      },
      {
        name: "content",
        children:
          "校园闲置是一款供学校使用的校园闲置平台， 使用 Vue/Vuex/VueRouter 进行开发。",
        className: "pricing0-content",
      },
      { name: "pricing", children: "", className: "pricing0-pricing" },
      {
        name: "button",
        children: {
          // icon: 'shopping-cart',
          href: "#",
          // type: '',
          children: "了解更多",
          className: "button",
          size: "large",
        },
      },
    ],
  },
};
export const Pricing01DataSource = {
  wrapper: { className: "home-page-wrapper pricing0-wrapper" },
  OverPack: { playScale: 0.3, className: "home-page pricing0" },
  imgWrapper: { className: "pricing0-img-wrapper", md: 12, xs: 24 },
  img: {
    className: "pricing0-img",
    name: "image",
    children: "/img/1.jpg",
  },
  childWrapper: {
    className: "pricing0-text-wrapper",
    md: 12,
    xs: 24,
    children: [
      {
        name: "title",
        children: "人事管理系统",
        className: "pricing0-title",
      },
      {
        name: "content",
        children:
          "本系统使用一款前后的分离的桌面软件， 使用 Electron 进行构建。",
        className: "pricing0-content",
      },
      { name: "pricing", children: "", className: "pricing0-pricing" },
      {
        name: "button",
        children: {
          // icon: 'shopping-cart',
          href: "#",
          // type: 'primary',
          children: "了解更多",
        },
      },
    ],
  },
};

export const Feature70DataSource = {
  wrapper: { className: "home-page-wrapper feature7-wrapper" },
  page: { className: "home-page feature7" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "feature7-title-wrapper",
    children: [
      {
        name: "title",
        className: "feature7-title-h1",
        children: "更多资源",
      },
      {
        name: "content",
        className: "feature7-title-content",
        children: "一些有意思的网站",
      },
    ],
  },
  blockWrapper: {
    className: "feature7-block-wrapper",
    gutter: 24,

    children: [
      {
        md: 6,
        xs: 24,
        name: "block0",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          href: "https://juejin.cn/user/923245499393687",
          target: "_blank",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/dcec27cc6ece0eb5bb217e62e6bec104.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "掘金",
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: "掘金算是国内质量很高的技术社区了",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block1",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          href: "https://zfitness.gitee.io/notes/",
          target: "_blank",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/dcec27cc6ece0eb5bb217e62e6bec104.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "",
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: "个人知识库构建",
            },
          ],
        },
      },
      // {
      //   md: 6,
      //   xs: 24,
      //   name: 'block2',
      //   className: 'feature7-block',
      //   children: {
      //     className: 'feature7-block-group',
      //     children: [
      //       {
      //         name: 'image',
      //         className: 'feature7-block-image',
      //         children:
      //           'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
      //       },
      //       {
      //         name: 'title',
      //         className: 'feature7-block-title',
      //         children: '身份证',
      //       },
      //       {
      //         name: 'content',
      //         className: 'feature7-block-content',
      //         children: '识别身份证正反面姓名、身份证号、发证机关等相关信息',
      //       },
      //     ],
      //   },
      // },
      // {
      //   md: 6,
      //   xs: 24,
      //   name: 'block3',
      //   className: 'feature7-block',
      //   children: {
      //     className: 'feature7-block-group',
      //     children: [
      //       {
      //         name: 'image',
      //         className: 'feature7-block-image',
      //         children:
      //           'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
      //       },
      //       {
      //         name: 'title',
      //         className: 'feature7-block-title',
      //         children: '身份证',
      //       },
      //       {
      //         name: 'content',
      //         className: 'feature7-block-content',
      //         children: '识别身份证正反面姓名、身份证号、发证机关等相关信息',
      //       },
      //     ],
      //   },
      // },
    ],
  },
};

export const Footer00DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: (
      <span>
        ©2021 <a href="https://zmblog.wang">zfitness</a> All Rights Reserved
      </span>
    ),
  },
};

export const otherLinks = [
  {
    href: "https://juejin.cn/user/923245499393687",
    cover:
      "/img/%E6%8E%98%E9%87%91.svg",
    name: "掘金",
    intro: "以后可能会在这个平台写一些文章",
  },
  {
    href: "https://zfitness.gitee.io/notes/",
    cover: "/img/logo.svg",
    name: "notes",
    intro: "使用 vuepress 构建的知识库",
  },
  {
    href: "https://github.com/zFitness",
    cover:
      "/img/Logo%20GitHub.svg",
    name: "github",
    intro: "github 主要存放了自己写的一些代码",
  },
];
