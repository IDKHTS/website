/* eslint-disable */
export default {
  name: 'download',
  columnName: {
      software: '软件',
      firmware: '固件',
      manuals: '文档',
  },
  snapmaker1:{
    containerCon: {
      h2text: '下载中心',
      breadcrumb1: '主页',
      breadcrumb2: '服务与支持',
      breadcrumb3: '下载中心',
      bgSourceSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/download-m-bg.jpg',
      bgImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/download-bg.png',
    },
    softwareCon: {
      columnLeftImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/snapmakerjs.png',
      columnRight: {
        h2text: 'Snapmaker Luban',
        h3text: '最易使用的三合一软件',
        buttonCon: [
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/snapmakerjs/snapmakerjs-2.7.1-win-x64.exe',
            iClass: 'windows',
            iText: '下载 Windows 64 位 版本',
          },
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/snapmakerjs/snapmakerjs-2.5.2-win-ia32.exe',
            iClass: 'windows',
            iText: '下载 Windows 32 位 版本',
          },
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/snapmakerjs/snapmakerjs-2.7.1-mac-x64.dmg',
            iClass: 'apple',
            iText: '下载 Mac 版本',
          },
        ],
        h4textPre: '此版本为 ',
        h4textNext: '（稳定版）。你可以在我们的',
        h4AHref: 'https://github.com/Snapmaker/Luban/releases',
        snapmakerjsVersion: '2.5,4',
        h4AText: 'GitHub',
        h4ATextLast: '页面下载以前的版本或 Ubuntu 版本。',
      },
    },
    additionalSoftware: {
      h2text: '软件相关的其他文件',
      buttonText: '下载',
      githubImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/icon_github_30x30@2x.png',
      iconImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/icon_pc_download_30x30@2x.png',
      columnData: [
        {
          title: 'CH340 驱动程序：适用于 macOS Mojave 10.14 及更高版本的操作系统',
          content: '当你在Snapmaker Luban中无法获取及连接机器串口时，请下载并安装驱动程序。',
          buttonHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/firmware/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          title: 'CH340 驱动程序：适用于 Windows操作系统',
          content: '当你在Snapmaker Luban中无法获取及连接机器串口时，请下载并安装驱动程序。',
          buttonHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/firmware/CH34X_Driver_V3.4_Windows.zip',
        },
        {
          title: '配置文件和刀具库',
          content: `当你使用第三方CAD或CAM软件生成G-code时，请下载相关配置文件及刀具库，并把它们存放于合适的路径。
          当前支持的第三方软件：Fusion 360, FreeCAD, ArtCAM, Aspire.`,
          githubHref: 'https://github.com/Snapmaker/snapmaker_cnc_post_process/',
          buttonHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/firmware/assets-20210120.zip',
         },
      ],
      columnsCon: [
        {
          h2text: '用于 macOS Mojave 10.14 or later 的 CH340 驱动程序',
          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          h2text: 'Fusion 360 的配置文件',
          h6text: '2020-05-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
        }
      ],
      columnsConSpe:[
        {
          h2text: '用于 Windows 的 CH340 驱动程序',
          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
        },
        {
          h2text: '固件版本：Snapmaker-GD32Base-',
          h6text: '2018-12-18',
          content: '这是Snapmaker初代的最新固件版本，版本号是2.11.',

          // buttonHref: this.firmwarePath,
        },
      ],
    },
    quickStartGuide: {
      h2text: '快速入门指南',
      aText: '阅读',
      columnsCon: [
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/navbar-logo.svg',
          h2text: '机器组装及3D打印入门指南',
          divImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/3d-printing.jpg',
          aHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/manual/3D-Printing-webview-V1.0.8.pdf',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/navbar-logo.svg',
          h2text: '激光雕刻入门指南',
          divImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/laser-guide.jpg',
          aHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/manual/Laser-webview-V1.0.6.pdf',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/navbar-logo.svg',
          h2text: 'CNC雕刻入门指南',
          divImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cnc-guide.jpg',
          aHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/manual/CNC-webview-V1.3.0.pdf',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/navbar-logo.svg',
          h2text: '外罩组装及使用入门指南',
          divImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/enclosure-cover.png',
          aHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/manual/enclosure-with-switch-webview-V1.1.0.pdf',
        },
        // {
        //   imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/navbar-logo.svg',
        //   h2text: '用户指导手册',
        //   divImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/guide-usemanual.png',
        //   aHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/manual/Snapmaker_Original_User_Manual.pdf',
        // },
      ],
    },
    softwareGuide: {
      h2text: '用户手册',
      guide: '用户手册',
      columnsCon: [
        {
          h4text: '如何使用 3D 打印功能',
          aHref: 'https://support.snapmaker.com/hc/zh-cn/articles/360048399574-%E4%BD%BF%E7%94%A8-Snapmakerj-Luban-%E7%94%9F%E6%88%90-G-%E4%BB%A3%E7%A0%81-%E6%89%93%E5%8D%B0%E6%A8%A1%E7%BB%84',
          aSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/use-3d.png',
        },
        {
          h4text: '如何使用激光雕刻功能',
          aHref: 'https://support.snapmaker.com/hc/zh-cn/articles/360048399674-%E4%BD%BF%E7%94%A8-Snapmaker-Luban-%E7%94%9F%E6%88%90-G-%E4%BB%A3%E7%A0%81-%E6%BF%80%E5%85%89%E6%A8%A1%E7%BB%84',
          aSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/use-laser.png',
        },
        {
          h4text: '如何使用 CNC 雕刻功能',
          aHref: 'https://support.snapmaker.com/hc/zh-cn/articles/360049151773-%E4%BD%BF%E7%94%A8-Snapmaker-Luban-%E7%94%9F%E6%88%90-G-%E4%BB%A3%E7%A0%81-CNC%E6%A8%A1%E7%BB%84',
          aSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/use-cnc.png',
        },
      ],
      },
  },
  snapmaker2: {
    containerCon: {
      h2text: '下载中心',
      breadcrumb1: '主页',
      breadcrumb2: '服务与支持',
      breadcrumb3: '下载中心',
      bgSourceSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/download-snapmaker2.0-cover-mobile.png',
      bgImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/download-snapmaker2.0-cover.png',
    },
    softwareCon: {
      columnLeftImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/download-snapmaker2.0-software.png',
      columnRight: {
        h2text: 'Snapmaker Luban',
        h3text: '最易使用的三合一软件',
        buttonCon: [
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.2.0-win-x64.exe',
            iClass: 'windows',
            iText: '下载 Windows 64 位 版本',
          },
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.2.0-win-ia32.exe',
            iClass: 'windows',
            iText: '下载 Windows 32 位 版本',
          },
          {
            snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.2.0-mac-x64.dmg',
            iClass: 'apple',
            iText: '下载 Mac 版本',
          },
        ],
        h4textPre: '此版本为 ',
        h4textNext: '（稳定版）。你可以在我们的',
        h4AHref: 'https://github.com/Snapmaker/Luban/releases',
        snapmakerjsVersion: '3.1.0',
        h4AText: 'GitHub',
        h4ATextLast: '页面下载以前的版本或 Ubuntu 版本。',
      },
    },
    additionalSoftware: {
      h2text: '软件相关的其他文件',
      buttonText: '下载',
      githubImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/icon_github_30x30@2x.png',
      iconImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/icon_pc_download_30x30@2x.png',
      columnData: [
        {
          title: 'CH340 驱动程序：适用于 macOS Mojave 10.14 及更高版本的操作系统',
          content: '当你在Snapmaker Luban中无法获取及连接机器串口时，请下载并安装驱动程序。',
          buttonHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/firmware/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          title: 'CH340 驱动程序：适用于 Windows操作系统',
          content: '当你在Snapmaker Luban中无法获取及连接机器串口时，请下载并安装驱动程序。',
          buttonHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/firmware/CH34X_Driver_V3.4_Windows.zip',
        },
        {
          title: '配置文件和刀具库',
          content: `当你使用第三方CAD或CAM软件生成G-code时，请下载相关配置文件及刀具库，并把它们存放于合适的路径。
          当前支持的第三方软件：Fusion 360, FreeCAD, ArtCAM, Aspire.`,
          githubHref: 'https://github.com/Snapmaker/snapmaker_cnc_post_process/',
          buttonHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/firmware/assets-20210120.zip',
         },
      ],
      columnsCon: [
        {
            h2text: '用于 macOS Mojave 10.14 or later 的 CH340 驱动程序',
          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
        },
        {
          h2text: 'Fusion 360 的配置文件',
          h6text: '2020-05-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
        }
      ],
      columnsConSpe:[
        {
          h2text: '用于 Windows 的 CH340 驱动程序',
          h6text: '2017-12-19',
          buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
        },
        {
          h2text: '固件：Snapmaker2_V',
          h6text: '2020-01-05',
          downloadFirmwareLast: '历史版本',
          forumLink: '论坛',
          content: '这是Snapmaker 2.0的最新固件版本，版本号是',
          contentNext: '。可以从我们的',
          contentLast: '下载以前的版本。',

          toolheadTip1:  'Please read this',
          toolheadTipText: 'article',
          toolheadTip2:  'before you upgrade the firmware to V1.12.0.',
          toolheadTipLink: 'https://forum.snapmaker.com/t/upgrade-the-toolheads-separately-with-snapmaker-firwmare-v1-12-0/17402',
          link: 'https://forum.snapmaker.com/t/snapmaker-2-0-firmware-updates-and-downloads/5443/',
          // buttonHref: this.firmwarePath,
        },
      ],
    },
    quickStartGuide: {
      h2text: '快速入门指南',
      aText: '阅读',
      columnsCon: [
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/navbar-logo.svg',
          h2text: 'A150 快速入门指南',
          divImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cndownload-snapmaker2.0-instruction-A150.png',
          aHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/manual/Snapmaker2_A150_EN_V1.3.0.pdf',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/navbar-logo.svg',
          h2text: 'A250 快速入门指南',
          aHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/manual/Snapmaker2_A250_EN_V1.3.0.pdf',
          divImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cndownload-snapmaker2.0-instruction-A250.png',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/navbar-logo.svg',
          h2text: 'A350 快速入门指南',
          divImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cndownload-snapmaker2.0-instruction-A350.png',
          aHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/manual/Snapmaker2_A350_EN_V1.3.0.pdf',
        },
      ],
    },

    softwareGuide: {
      h2text: '用户手册',
      guide: '用户手册',
      columnsCon: [
        {
          h4text: '3D 打印',
          aHref: 'https://support.snapmaker.com/hc/zh-cn/articles/360041733553-3D-Printing',
          aSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/document-snapmaker2.0-software-guide-01.jpg',
        },
        {
          h4text: '激光雕刻与切割',
          aHref: 'https://support.snapmaker.com/hc/zh-cn/articles/360041254874-Laser-Engraving-and-Cutting-',
          aSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/document-snapmaker2.0-software-guide-02.jpg',
        },
        {
          h4text: 'CNC 雕刻和切割',
          aHref: 'https://support.snapmaker.com/hc/zh-cn/articles/360041252474-CNC-Carving',
          aSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/document-snapmaker2.0-software-guide-03.jpg',
        },
      ],
    },


  },

  rotary: {
  containerCon: {
    h2text: 'Downloads',
    breadcrumb1: 'Home',
    breadcrumb2: 'Support',
    breadcrumb3: 'Downloads',
    bgSourceSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/download-snapmaker2.0-cover-mobile.png',
    bgImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/download-snapmaker2.0-cover.png',
  },
  softwareCon: {
    columnLeftImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/download-snapmaker2.0-software.png',
    columnRight: {
      h2text: 'Snapmaker Luban',
      h3text: 'The most easy-to-use 3-in-1 Software',
      buttonCon: [
        {
          snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-win-x64.exe',
          iClass: 'windows',
          iText: 'Download for Win 64 bit',
        },
        {
          snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-win-ia32.exe',
          iClass: 'windows',
          iText: 'Download for Win 32 bit',
        },
        {
          snapmakerjsPath: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/luban/snapmaker-luban-3.8.0-mac-x64.dmg',
          iClass: 'apple',
          iText: 'Download for Mac',
        },
      ],
      h4textPre: 'This is Version ',
      h4textNext: ' (stable release). You can download previous version or the Ubuntu version from our',
      h4AHref: 'https://github.com/Snapmaker/Luban/releases',
      snapmakerjsVersion: '3.1.0',
      h4AText: 'GitHub',
      h4ATextLast: ' page.',
    },
  },
  additionalSoftware: {
    h2text: 'Additional Files for the Software',
    buttonText: 'Download',
    githubImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/icon_github_30x30@2x.png',
    iconImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/icon_pc_download_30x30@2x.png',
    columnData: [
      {
        title: 'CH340 Driver for macOS Mojave 10.14 or later',
        content: 'Download and install the driver if you can’t find any serial port to connect to on Snapmaker Luban.',
        buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
      },
      {
        title: 'CH340 Driver for Windows',
        content: 'Download and install the driver if you can’t find any serial port to connect to on Snapmaker Luban.',
        buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
      },
      {
        title: 'Configuration Files & Tool Libraries',
        content: `Download and set up the configuration files for generating G-code on third-party CAD / CAM software.
            Supported software: Fusion 360, FreeCAD, ArtCAM, Aspire, and more to be added.`,
        githubHref: 'https://github.com/Snapmaker/snapmaker_cnc_post_process/',
        buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
       },
    ],
    columnsCon: [
      {
        h2text: 'CH340 Driver for macOS Mojave 10.14 or later',
        h6text: '2017-12-19',
        buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V1.4_Mac.zip',
      },
      {
        h2text: 'Configuration Files for Fusion 360',
        h6text:  '2021-01-20',
        buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/cnc_post/assets-20210120.zip',
      }
    ],
    columnsConSpe:[
      {
        h2text: 'CH340 Driver for Windows',
        h6text: '2017-12-19',
        buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/CH34X_Driver_V3.4_Windows.zip',
      },
      {
        h2text: 'Firmware: Snapmaker2_V',
        h6text: '2020-01-05',
        downloadFirmwareLast: 'history versions',
        forumLink: 'forum.',
        toolheadTip1:  'Please read this',
        toolheadTipText: 'article',
        toolheadTip2:  'before you upgrade the firmware to V1.12.0.',
        toolheadTipLink: 'https://forum.snapmaker.com/t/upgrade-the-toolheads-separately-with-snapmaker-firwmare-v1-12-0/17402',
        content: '这是Snapmaker 2.0的最新固件版本，版本号是',
        contentNext: '。可以从我们的',
        contentLast: '下载以前的版本。',
        link: 'https://forum.snapmaker.com/t/snapmaker-2-0-firmware-updates-and-downloads/5443',
        buttonHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/firmware/Snapmaker2_V1.7.0.0.zip',
      },
    ],
  },
  quickStartGuide: {
    h2text: 'Quick Start Guide',
    aText: 'Read',
    columnsCon: [
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/navbar-logo.svg',
          h2text: 'Quick Start Guide for Rotary Module',
          divImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/rotary-guide.png',
          aHref: 'https://s3-us-west-2.amazonaws.com/snapmaker.com/download/manual/Snapmaker2_Rotary_Module_EN_V1.0.0.pdf',
        }
    ],
  },

  softwareGuide: {
    h2text: 'User Manuals',
    guide: 'User Manuals',
    columnsCon: [
      {
        h4text: 'CNC Carving',
        aHref: 'https://snapmaker.zendesk.com/hc/en-us/articles/1500001930021',
        aSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/CNC-manual.png',
      },
      {
        h4text: 'Laser Engraving and Cutting',
        aSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/laser-manual.png',
        aHref: 'https://snapmaker.zendesk.com/hc/en-us/articles/360060595414',
      },
    ],
   },
},

  originalContent: [
    {
      img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/support-snapmaker-original-cover.png',
      key: 1,
      h3: 'Snapmaker 初代',
      buynow: '了解更多',
      aHref: '/download/snapmaker1',
    },
    {
      img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/support-snapmaker-2.0-cover.png',
      key: 2,
      h3: 'Snapmaker 2.0',
      buynow: '了解更多',
      aHref: '/download/snapmaker2',
    },
  ],
  containerCon: {
    h2text: '下载中心',
    breadcrumb1: '主页',
    breadcrumb2: '服务与支持',
    breadcrumb3: '下载中心',
    bgSourceSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/download-m-bg.jpg',
    bgImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/download-bg.png',
  },
  warningCon: {
      support: `Windows 32位版本的Snapmaker Luban没有3D切片功能。`,
      download: `如需该功能，请到论坛下载 Snapmakerjs V2.5.2。`
  },
  opensourceContent: {
      title: `为何选择Snapmaker Luban: 免费、开源、三合一软件`,
      mobileTitle: `Snapmaker Luban: 免费、开源、三合一软件`,
      button: `了解更多`,
      buttonHref: 'https://luban.xyz/',
      imageMobile: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/pic_open source bg_328x100.png',
      image: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/pic_open source bg_1112x180@2x.png',
  }
};
