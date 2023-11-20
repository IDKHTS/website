export default {
  headTitle: `Snapmaking Contest - Games that made your childhood`,
  banner: {
    imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/contest/14th/14th.jpg', // 11th-Snapmaking-Contest-564X800.png
    imgMobileSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/contest/14th/14th-mob.jpg',
    mainTitle: '14th Snapmaking Contest - Games that are made with Snapmaker',
    desc: [
      `Do you remember those games that you grew up playing? Do you remember those impressive and exciting projects that you ever made?`,
      `In this round, we encourage users to make any game in any form with the help of 3D printing, laser, or CNC. A game can be anything you can have fun with! The game doesn't need to be a game in a common sense. For example, something you make yourself happy, a toy you made for yourself or your family, or an old game you recreate or repair by 3D printing. As many as you can make! Also, as the 7th anniversary theme says, "Growing Together. Making Forever." New project is not a must. Any projects that fit the theme are valid for entry, including old projects.`
      // `In this round, we encourage all users to make a special gift with Snapmaker. From 3D printed models to laser engraved ornaments and CNC carved reliefs, you name it! It's time to show your fantastic holiday gift ideas and turn your ideas into reality!`
    ],
    date: 'JUN 1 - JUL 1, 2023',
  },
  widget: {
    // text: 'Contest Gallery — Vote for Your Favorite Projects!',
    galleryId: 'F0Bc5',
    // gleamLink: 'https://gleam.io/J5HHn/get-started-in-snapmaker',
    // gleamTitle: 'Get Started in Snapmaker'
  },
  contestWays: {
    mainTitle: 'Ways to Enter the Contest',
    introduction: {
      title: 'Participants can enter the contest in 3 ways:',
      points: [
        {
          idx: '01',
          wayTitle: 'Social Media Post:',
          content: [
            { value: `Post photos/videos with a detailed introduction and required hashtags `, isTag: false },
            { value: '#snapmaking', isTag: true },
            { value: ' and ', isTag: false },
            { value: ' #childhoodgames', isTag: true },
            { value: '. Then your post will be collected automatically to the Contest Gallery after approval. ', isTag: false }
          ]
        },
        {
          idx: '02',
          wayTitle: 'Upload Directly:',
          content: [
            { value: `You can directly upload a project photo to the Contest Gallery.`, isTag: false }
          ]
        },
        {
          idx: '03',
          wayTitle: 'Submit via Email:',
          content: [
            { value: `You can send your project to ` },
            { value: `social@snapmaker.com.`, isLink: true, link: `mailto:social@snapmaker.com` },
            { value: ` We will upload your work to the entry gallery with your name and a short description. So that everyone else can vote for your work in a later phase.` }
          ]
        }
      ]
    },
    waysArray: [
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/icon_facebook_88x88.png',
        link: 'https://www.facebook.com/snapmaker',
        iconText: 'Facebook',
        firstText: 'Post to Snapmaker’s ',
        secondText: 'page',
        lastText: ', owners group, or <a style="text-decoration: underline;" target="_blank" href="https://forum.snapmaker.com/c/snapmaker-showcase/9">forum</a> with the required hashtags.'
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/icon_instagram_88x88.png',
        link: 'https://www.instagram.com/snapmakerinc/',
        iconText: 'Instagram',
        firstText: 'Post with the required hashtags and ',
        secondText: 'mention',
        lastText: '@snapmakerinc.'
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/icon_twitter_88x88.png',
        iconText: 'Twitter',
        link: 'https://twitter.com/snapmaker',
        firstText: 'Tweet with the required hashtags and ',
        secondText: 'mention',
        lastText: '@snapmaker.'
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/contest/9th-snapmaking-contest/Gallery.png',
        // link: 'https://www.instagram.com/snapmakerinc/',
        iconText: 'Gallery',
        firstText: 'Upload the project by clicking  ',
        secondText: 'ENTER COMPETITION',
        lastText: 'button.'
      }
    ]
    // note: 'Note: Only one photo/video can be shown in the contest gallery for each project.'
  },
  contestRules: {
    mainTitle: 'Prizes, Rules, and Evaluation',
    // subTitle: 'We will announce the result and contact the winners through email or direct message within one week after the contest.',
    contestPrizes: [
      {
        title: 'Prizes',
        prizes: [
          {title: '1st Prize', content: `$1000/€1000 Coupon`},
          {title: '2nd Prize', content: `$500/€500 Coupon `},
          {title: '3rd Prize', content: `$200/€200 Coupon`},
          {title: 'Lucky Prize *3', content: `$50/€50 Materials Coupons`}
        ],
        note: ''
      }
    ],
    rules: [
      {
        mainTitle: 'Rules',
        // subTitle: `Participants need to make a movable project with 3DP elements so that the result fits the theme of this contest.`,
        content: [
          '1. A game should be anything that you have fun with! As long as you are in line with it, the project can be counted as valid.',
          '2. Your project needs to be complete.',
          '3. To prove that you are a Snapmaker user, the Snapmaker machine should be featured in at least one of the photos/videos of your post or upload. ',
          '4. Most parts of your project should be created with a Snapmaker machine.'
        ],
        note: 'Note: After approval by the admin, only one photo/video can be shown in the Contest Gallery for each project. If you choose to upload your project with more than one photo/video to the Contest Gallery, you will need to upload it more than once. This Gallery will display all entries for fair voting.'
      },
      {
        mainTitle: 'Evaluation',
        noticeNote: 'Primary Round: The contest is open for sharing and voting from JUL 2 - JUL 4, 2023. The top 20 voted projects in the Contest Gallery will enter the final round.',
        contentDescription: 'Final Round: Snapmaker team will evaluate the projects and decide on the winners according to the following criteria:',
        content2: [
          '• Originality',
          '• Creativity',
          '• Theme Relevance',
          '• Photo/Video Quality'
        ]
      }
    ]
  },
  contestText: 'Contest Gallery!',
  contestVotes: {
    mainTitle: 'How to Get More Votes',
    content: [
      `Find the card of your project in the Gallery.`,
      `Open the card and click the share icon at the bottom right corner. (We have eliminated logging in to vote, and everyone can participate.)`,
      `Share your project to other platforms and canvass for votes from JUL 2 - JUL 4, 2023.`
    ]
  },
  contestFaq: {
    faqTitle: 'FAQ',
    faqContent: [
      {
        question: '• Why can’t I see my project in the contest gallery?',
        anwser: 'Projects will be shown after getting approval, usually 48h after submission.'
      },
      {
        question: `• Can I submit more than one project?`,
        anwser: 'Yes, but each participant can only win the prize once.'
      },
      {
        question: `• Who should I ask questions about the contest or listed projects?`,
        anwser: 'Feel free to contact us via <a href="mailto:social@snapmaker.com">social@snapmaker.com</a>'
      },
      {
        question: `• How do I know if I win?`,
        anwser: 'We will announce the results on our official social media accounts within a week after the contest ends. Soon after that, we will contact the winners through social media or email.'
      }
    ],
    termsTitle: 'Terms and conditions',
    termsContent: [
      `• The coupon codes only apply to Snapmaker official online store. They are valid for 3 months, exclusive of tax and shipping.`,
      `• The $50/€50 Material Coupon can be applied to any item under the Material category.`,
      `• Participants own the copyright of their entries.`,
      `• Participants violating the terms of the contest or cheating will be disqualified.`,
      `• We reserve the right to terminate the contest or change the terms of it at any time.`,
      `• By submitting the project, you agree that the Snapmaker team has the right to use your project for promotion, exhibition, or related purposes.`
    ]
  }
}
