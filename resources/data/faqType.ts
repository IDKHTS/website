export const FAQ_TYPE = {
  original: 'faqType',
  snapmaker2: 'faq2Type',
  rotary: 'faqRotaryType',
  enclouseAndFilter: 'faqEnclosureFilter',
  Laserhead10W: 'faq10WLaser',
  artisan: 'faqArtisan'
}
export default {
  faqType: {
    'en-US': [
      'Pre-sales',
      '3D Printing',
      'Laser',
      'CNC'
    ],
    'zh-CN': [
      '售前咨询',
      '3D 打印',
      '激光雕刻与切割',
      'CNC 雕刻'
    ],
    label: 'SM1',
    tags: [
      'local',
      'Official'
    ]
  },
  faq2Type: {
    'en-US': [
      // 'Pre-order',
      '3D Printing',
      'Laser',
      'CNC',
      'Others'
      // 'Addons'
    ],
    'zh-CN': [
      '预售',
      '3D 打印',
      '激光雕刻与切割',
      'CNC 雕刻与切割',
      '扩展组件'
    ],
    labels: ['SMAT'],
    tags: [
      'local',
      'Official'
    ]
  },
  faqRotaryType: {
    'en-US': [
      'Pre-order',
      '3D Printing',
      'Laser',
      'CNC',
      'Others'
    ],
    'zh-CN': [
      '预售',
      '3D 打印',
      '激光雕刻与切割',
      'CNC 雕刻与切割',
      '其他'
    ],
    labels: ['Rotary'],
    tags: [
      'local',
      'Official'
    ]
  },
  faqEnclosureFilter: {
    'en-US': [
      'Pre-sales',
      'Operation',
      'Maintenance'
    ],
    labels: ['2.0 Enclosure', 'Purifier'],
    tags: [
      'local',
      'Official'
    ]
  },
  faq10WLaser: {
    'en-US': [
      'Pre-sales'
    ],
    labels: ['10W'],
    tags: [
      'local',
      'Official'
    ]
  },
  faqArtisan: {
    'en-US': [
      'Pre-sales'
    ],
    labels: ['Artisan'],
    tags: ['']
  }
}