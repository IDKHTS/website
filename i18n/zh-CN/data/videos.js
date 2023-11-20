/* eslint-disable */
export default {
  name: 'videos',
  snapmaker1:{
    iconImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/btn_play_hover_80x80.png',
    Intro:{
        title: '产品简介',
        introductMobileImg:'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/snapmaker 2.0mobile.png',

        introductImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/snapmaker original.png',
        videoTitle: 'Snapmaker 初代介绍',
        introductVideo: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/3-in1-KS-Order-Now.mp4',
        unboxing: [
            {
                img:'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/1.0 unboxing.png',
                videoTitle: 'Snapmaker 初代开箱',
                video: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/Snapmaker%203-in-1-3D-Printer-%28CN%29.mp4',
            },
            {
                img:'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/1.6mw laser.png',
                videoTitle: 'Snapmaker 初代激光切割模块（1600 mW）介绍',
                video: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/1600mW-Laser-CN.mp4',
            }
        ]
    },
    CommentTitle: 'Reviews From Snapmaker Original Owners',
    // reviews: {
    //     title: '产品测评',
    //     content: [
    //         {
    //             imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/RomanRussian.jpg',
    //             text: 'Roman Khramov测评（俄语）',
    //             videoLink: 'https://www.youtube.com/embed/RWyMtIfrnp4',
    //         },
    //         {
    //             imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/RCLifeOnEnglish.jpg',
    //             text: 'RCLifeOn测评（英语）',
    //             videoLink: 'https://www.youtube.com/embed/uwkPZETgdlc',
    //         },
    //         {
    //             imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/MattleyItalian.jpg',
    //             text: 'Mattley – Artigiano digitale测评（意大利语）',
    //             videoLink: 'https://www.youtube.com/embed/K-U58uzr-KE',
    //         },
    //         {
    //             imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/DanieleItalian.jpg',
    //             text: 'Daniele Tartaglia测评（意大利语）',
    //             videoLink: 'https://www.youtube.com/embed/ZSfYEydi7SI',
    //
    //         },
    //         {
    //             imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/IamMANJapanese.jpg',
    //             text: 'IamMAN测评（日语）',
    //             videoLink: 'https://www.youtube.com/embed/YjEVGScIj7w',
    //
    //         },
    //         {
    //             imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/SHIGEMONJapanese.jpg',
    //             text: 'SHIGEMON测评（日语）',
    //             videoLink: 'https://www.youtube.com/embed/_N0ZqvKmyv4',
    //         },
    //         {
    //             imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/AnakIndonesian.jpg',
    //             text: 'Anak Agung Duwi Arsana测评（印尼语）',
    //             videoLink: 'https://www.youtube.com/embed/gDRefH0Na-c',
    //         },
    //         {
    //             imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/LeFrench.jpg',
    //             text: 'Le GüeroLoco（法语）',
    //             videoLink: 'https://www.youtube.com/embed/uiCKKd8dM8Q',
    //         },
    //         {
    //             imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/RatoPortuguese.jpg',
    //             text: 'Rato Borrachudo测评（葡萄牙语）',
    //             videoLink: 'https://www.youtube.com/embed/l1pywwuc3ho',
    //         },
    //     ]
    // },
    videoTutorial: {
      h2text: '产品教程',
      tutorials: [
          {
              title: '新手入门',
              columns: [
                {
                  h4text: '如何使用 3D 打印功能',
                  videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/How-to-Use-the-3D-Printer.mp4',
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn/original-3D-Printing.png',
                },
                {
                  h4text: '如何使用激光雕刻功能',
                   videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/How-to-Use-the-Laser-Engraver.mp4',
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/laser.png',
                },
                {
                  h4text: '如何使用 CNC 雕刻功能',
                 videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/How-to-Use-the-CNC-Carver.mp4',
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn/cnc.png',
                },
              ],
          },
          {
              title: '软件应用',
              columns:[
                {
                  h4text: '如何进行多模型 3D 打印',
                  // TODO
                  videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/How-to-3D-Print-Multiple-Models-CN.mp4',
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/Multiple-Models-3D-Printing.png',
                },
                {
                  h4text: '如何进行多模型激光雕刻与切割',
                  videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/How-to-Laser-Engrave-Multiple-Models-CN.mp4',
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn/Multiple-Models-Laser-Engraving.png',
                },
                {
                  h4text: '如何使用激光雕刻的走线模式',
                  videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/How-to-Laser-Engrave-in-Line-Mode-CN.mp4',
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn/Line-mode-Laser-Engraving.png',
                },
            ],
          },
          {
              title: '其他应用',
              columns:[
                {
                  h4text: '如何扩展 Z 轴',
                  videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/How-to-Extend-Z-Axis.mp4',
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/Extend-Z-Axis.png',
                },
                {
                  h4text: '如何解决首层打印粘附问题',
                    videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/How-to-Ensure-Bed-Adhesion.mp4',
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn/Fix-First-Layer-Adhesion-Issue.png',
                },
                {
                  h4text: '如何清理模组内的断料',
                  videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/How-to-Clean-the-Broken-Filament.mp4',
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn/Remove-Broken-Filament.png',
                },

            ],
          },

      ],

    },
    advanced: {
        h2text: '进阶教程',
        advance: [
            {
                title: '设计与制造',
                columns:[
                  {
                    h4text: '如何使用 Meshmixer 编辑 STL 文件',
                    //todo
                    videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/How-to-edit-stl-files-with-meshmixer.mp4',
                    figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/Edit-STL-Files-with-Meshmixer.png',
                  },
                  {
                    h4text: '从 Fusion 360 建模到 CNC 加工',
                    videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker2/Academy%232-Fusion360-cn.mp4',
                    figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/Fusion-360-CAD-&-CAM.png',
                  },
              ],
          },
      ]
    }
  },
  snapmaker2:{
    iconImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/btn_play_hover_80x80.png',
    Intro:{
        title: '产品简介',
        introductMobileImg:'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/snapmaker 2.0mobile.png',
        introductImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/snapmaker 2.0.png',
        videoTitle: 'Snapmaker 2.0介绍',
        introductVideo: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker2/Snapmaker_FINAL_Revised_1080p_CN.mp4',
        unboxing: [
            {
                img:'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/2.0 unboxing.png',
                videoTitle: 'Snapmaker 2.0开箱',
                video: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker2/Snapmaker2.0_Unboxing.mp4',
            },
            {
                img:'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/made snapmaker 2.0.png',
                videoTitle: 'Snapmaker 2.0是如何被生产出来的',
                video: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker2/How-we-made-it.mp4',
            }
        ]
    },
    CommentTitle: 'Reviews From Snapmaker 2.0 Owners',
    videoTutorial: {
      h2text: '产品教程',
      tutorials: [
          {
              title: '新手入门',
              columns: [
                {
                  h4text: '如何组装机器',
                  videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker2/Snapmaker-2.0-CN-voiceover/A350-Assembly-CN-Voiceover-Subtitled.mp4',
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn/Machine Assembly.png',
                },
                {
                  h4text: '如何使用 3D 打印功能',
                  videoLink: "https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker2/Snapmaker-2.0-CN-voiceover/3D-printing-CN-Voiceover-Subtitled.mp4",
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn/snapmaker-2-3D-Printing.png',
                },
                {
                  h4text: '如何使用激光切割功能（工作原点法）',
                  videoLink: "https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker2/Snapmaker-2.0-CN-voiceover/Laser-work-origin-CN-Voiceover-Subtitled.mp4",
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn/Laser-via-Work-Original.png',
                },
                {
                  h4text: '如何使用激光切割功能（摄像捕捉法）',
                  videoLink: "https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker2/Snapmaker-2.0-CN-voiceover/Laser-camera-capture-CN-Voiceover-Subtitled.mp4",
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn/Laser-via-Camera-Capture.png',
                },
                {
                  h4text: '如何使用 CNC 雕刻功能',
                  videoLink: "https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker2/Snapmaker-2.0-CN-voiceover/CNC-CN-Voiceover-Subtitled.mp4",
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/CNC.png',
                },
                {
                  h4text: '如何组装外罩',
                  videoLink: "https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker2/Snapmaker-2.0-CN-voiceover/Enclosure-assembly-CN-Voiceover-Subtitled.mp4",
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/Enclosure Assembly.png',
                },
                {
                  h4text: '如何使用外罩',
                  videoLink: "https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker2/Snapmaker-2.0-CN-voiceover/Enclosure-using-CN-Voiceover-Subtitled.mp4",
                  figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn/Use-Enclosure.png',
                },
              ],
          },
      ],

    },
    advanced: {
        h2text: '进阶教程',
        advance: [
            {
                title: '设计与制造',
                columns:[
                  {
                    h4text: '如何使用 Meshmixer 编辑 STL 文件',
                    //todo
                    videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker1/How-to-edit-stl-files-with-meshmixer.mp4',
                    figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/Edit-STL-Files-with-Meshmixer.png',
                  },
                  {
                    h4text: '从 Fusion 360 建模到 CNC 加工',
                    videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker2/Academy%232-Fusion360-cn.mp4',
                    figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn/Fusion-360-CAD-&-CAM.png',
                  },
                  {
                    h4text: '如何使用 Inkscape 制作激光切割纸雕灯',
                    videoLink: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/Snapmaker%20Academy/inkscape-laser-cut-lamp-CN.mp4',
                    figureSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/paperLampCn.png',
                  },
              ],
          },
      ]
    }
  },
}
