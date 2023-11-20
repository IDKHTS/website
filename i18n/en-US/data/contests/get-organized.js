export default {
  headTitle: `Snapmaking Contest - Get Organized with Snapmaker`,
  banner: {
    imgSrc:
      'https://ditfjx9w4x3vl.cloudfront.net/assets/contest/11th/Snapmaking-Contest-11th-2400X500.png', // 11th-Snapmaking-Contest-564X800.png
    imgMobileSrc:
      'https://ditfjx9w4x3vl.cloudfront.net/assets/contest/11th/Snapmaking-Contest-11th-Banner-960x533.png',
    mainTitle: '11th Snapmaking Contest - Get Organized with Snapmaker',
    desc: [
      `Snapmaker has been a part of your life for a while. Have you ever used Snapmaker to create the right storage goodies you couldn't find in any store? Or have you perfectly customized a shelve for a dead corner with the help of Snapmaker?`,
      `In this round, we encourage all users to be bold and unbridled in their creativity and tackle this seemingly super easy task. Let's show your storage projects, especially original ones, that are best for your own use. `,
      `Time to let everyone experience the fun of creating and let everyone know how easy it is to turn ideas into reality, now!`,
    ],
    date: 'SEP 15 - OCT 18, 2022',
  },
  themeColor: `#0f1431`,
  widget: {
    text: 'Contest Gallery — Vote for Your Favorite Projects!',
    galleryId: 'LctMF',
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
            {
              value: `Post photos/videos with a detailed introduction and required hashtags `,
              isTag: false,
            },
            { value: '#snapmaking', isTag: true },
            { value: ' and ', isTag: false },
            { value: ' #getorganized', isTag: true },
            {
              value:
                '. Then your post will be collected automatically to the Contest Gallery after approval. ',
              isTag: false,
            },
          ],
        },
        {
          idx: '02',
          wayTitle: 'Upload Directly:',
          content: [
            {
              value: `You can directly upload a project photo to the Contest Gallery.`,
              isTag: false,
            },
          ],
        },
        {
          idx: '03',
          wayTitle: 'Submit via Email:',
          content: [
            { value: `You can send your project to ` },
            {
              value: `social@snapmaker.com.`,
              isLink: true,
              link: `mailto:social@snapmaker.com`,
            },
            {
              value: ` We will upload your work to the entry gallery with your name and a short description. So that everyone else can vote for your work in a later phase.`,
            },
          ],
        },
      ],
    },
    waysArray: [
      {
        imgSrc:
          'https://ditfjx9w4x3vl.cloudfront.net/img/icon_facebook_88x88.png',
        link: 'https://www.facebook.com/snapmaker',
        iconText: 'Facebook',
        firstText: 'Post to Snapmaker’s ',
        secondText: 'page',
        lastText: 'with the required hashtags.',
      },
      {
        imgSrc:
          'https://ditfjx9w4x3vl.cloudfront.net/img/icon_instagram_88x88.png',
        link: 'https://www.instagram.com/snapmakerinc/',
        iconText: 'Instagram',
        firstText: 'Post with the required hashtags and ',
        secondText: 'mention',
        lastText: '@snapmakerinc.',
      },
      {
        imgSrc:
          'https://ditfjx9w4x3vl.cloudfront.net/img/icon_twitter_88x88.png',
        iconText: 'Twitter',
        link: 'https://twitter.com/snapmaker',
        firstText: 'Tweet with the required hashtags and ',
        secondText: 'mention',
        lastText: '@snapmaker.',
      },
      {
        imgSrc:
          'https://ditfjx9w4x3vl.cloudfront.net/assets/contest/9th-snapmaking-contest/Gallery.png',
        // link: 'https://www.instagram.com/snapmakerinc/',
        iconText: 'Gallery',
        firstText: 'Upload the project by clicking  ',
        secondText: 'ENTER COMPETITION',
        lastText: 'button.',
      },
    ],
    // note: 'Note: Only one photo/video can be shown in the contest gallery for each project.'
  },
  contestRules: {
    mainTitle: 'Prizes, Rules, and Evaluation',
    // subTitle: 'We will announce the result and contact the winners through email or direct message within one week after the contest.',

    contestPrizes: [
      {
        title: 'Prizes',
        prizes: [
          {
            title: '1st Prize',
            content: `Snapmaker Rotary Module Coupon x 1 <br> Epoxy Tooling Material Coupon x 1`,
          },
          { title: '2nd Prize', content: `$200/€200 Coupon x 1` },
          { title: '3rd Prize', content: `$100/€100 Material Coupon x 1` },
          { title: 'Lucky Prize*3', content: `Filament (500g) Coupon x 2` },
        ],
        note: '',
      },
      // {
      //   title: 'Extra Prizes for Voters x 2 (Voting from JUL 12 to JUL 15)',
      //   prizes: [
      //     {title: '', content: `Filament (1kg) Coupon x 1`}
      //   ],
      //   note: `To encourage everyone to enjoy the event, we will pick 2 lucky voters to gift FREE filaments!
      //   Come and vote for your favorite project! (from JUL 12 to JUL15.)`
      // }
    ],
    //  {
    //   mainTitle: 'Prizes',
    //   prizes: [
    //     {title: '1st Prize', content: `Snapmaker 2.0 F350 Coupon x 1`},
    //     {title: '2nd Prize', content: `10W High Power Laser Module Coupon x 1`},
    //     {title: '3rd Prize', content: `$200/€200 Material Coupon x 1`},
    //     {title: 'Lucky Prize*3', content: `Filament (1kg) Coupon x 1`},
    //     {title: 'Lucky Prize*3', content: `Filament (1kg) Coupon x 1`}
    //   ],
    //   // imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/pic_rotary module_564x180.png',
    //   // grandTitle: '1st Prize',
    //   // grandContent: '$1,000/€1,000 Coupon',
    //   // firstPrizeTitle: '1st Prize',
    //   // firstPrizeContent: 'Snapmaker 2.0 F350 Coupon x 1',
    //   // secondPrizeTitle: '2nd Prize',
    //   // secondPrizeContent: '10W High Power Laser Module Coupon x 1',
    //   // thirdPrizeTitle: '3rd Prize',
    //   // thirdPrizeContent: '$200/€200 Material Coupon x 1',
    //   // luckyTitle: 'Lucky Prize*3',
    //   // luckyContent: 'Filament (1kg) Coupon x 1',
    //   note: ''
    // },
    rules: [
      {
        mainTitle: 'Rules',
        // subTitle: `Participants need to make a movable project with 3DP elements so that the result fits the theme of this contest.`,
        content: [
          '1. Your project should be in line with the theme “Get Organized with Snapmaker”.',
          '2. Your project needs to be complete.',
          '3. To prove that you are a Snapmaker user, Snapmaker machine should be featured in at least one of the photos/videos of your post or upload.',
          '4. Most parts of your project should be created with a Snapmaker machine.',
        ],
        note: 'Note: After approval by the admin, only one photo/video can be shown in the Contest Gallery for each project. If you choose to upload your project with more than one photo/video to the Contest Gallery, you will need to upload it more than once. This Gallery will display all entries for fair voting.',
      },
      {
        mainTitle: 'Evaluation',
        noticeNote:
          'Primary Round: The contest is open for sharing and voting from OCT 14 - OCT 18, 2022. The top 20 voted projects in the Contest Gallery will enter the final round.',
        contentDescription:
          'Final Round: Snapmaker team will evaluate the projects and decide the winners according to the following criteria:',
        content2: [
          '• Originality',
          '• Creativity',
          '• Theme Relevance',
          '• Photo/Video Quality',
        ],
      },
    ],
  },
  contestText: 'Contest Gallery!',
  contestVotes: {
    mainTitle: 'How to Get More Votes',
    content: [
      `Find the card of your project in the Gallery.`,
      `Open the card and click the share icon at the bottom right corner. ( We have eliminated logging in to vote and everyone can participate.)`,
      `Share your project to other platforms and canvass for votes from OCT 14 - OCT 18, 2022.`,
    ],
  },
  contestFaq: {
    faqTitle: 'FAQ',
    faqContent: [
      {
        question: '• Why can’t I see my project in the contest gallery?',
        anwser:
          'Projects will be shown after getting approval, usually 48h after submission.',
      },
      {
        question: `• Can I submit more than one project?`,
        anwser: 'Yes, but each participant can only win the prize once.',
      },
      {
        question: `• Who should I ask questions about the contest or listed projects?`,
        anwser:
          'Feel free to contact us via <a href="mailto:social@snapmaker.com">social@snapmaker.com</a>',
      },
      {
        question: `• How do I know if I win?`,
        anwser:
          'We will announce the results on our official social media accounts within a week after the contest ends. Soon after that, we will contact the winners through social media or email.',
      },
    ],
    termsTitle: 'Terms and conditions',
    termsContent: [
      `• The coupon codes only apply to Snapmaker official online store. They are valid for 3 months, exclusive of shipping. `,
      `• The $100/€100 Material Coupon can be applied to any item under the “Material“ category. `,
      `• Participants need to own the copyright of their entries. `,
      `• Participants violating the terms of the contest or cheating will be disqualified. `,
      `• We reserve the right to terminate the contest or change the terms of it at any time. `,
      `• By submitting the project, you agree that the Snapmaker team has the right to use your project for promotion, exhibition, or related purposes.`,
    ],
  },
}
