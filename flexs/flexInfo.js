export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'image',
            url: 'https://movies.yahoo.com.tw/i/o/production/movies/October2022/J98VRuWXLSEM42xOWZ5q-720x960.jpg',
            aspectMode: 'cover',
            size: 'full',
            aspectRatio: '9:12'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'filler'
              },
              {
                type: 'text',
                text: '你的婚姻不是你的婚姻-聖筊',
                size: 'xl',
                color: '#ffffff',
                wrap: true,
                weight: 'bold'
              },
              {
                type: 'filler'
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '播出日期',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '2022-10-21',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '總集數',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '-',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'IMDb分數',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '-',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '導演',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '田中健太、石井康晴、平野俊一',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '編劇',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '篠崎繪里子',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '主演',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5,
                text: '平野紫耀、黑島結菜、三浦友和、山本耕史、坂東彌十郎、井之脇海、中村友理、宇野祥平、時任勇氣、船越英一郎'
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '串流平台',
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: 'friDay影音、KKTV',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: 'OTT連結',
                    align: 'center',
                    size: 'md',
                    color: '#E4F2ED',
                    offsetTop: '3px'
                  }
                ],
                height: '30px',
                borderWidth: '1px',
                borderColor: '#999999',
                action: {
                  type: 'message',
                  label: 'action',
                  text: 'ott 詐欺獵人'
                },
                justifyContent: 'center',
                alignItems: 'center',
                offsetEnd: '0px',
                offsetBottom: '0px',
                width: '48%'
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: '劇情簡介',
                    align: 'center',
                    size: 'md',
                    color: '#E4F2ED',
                    offsetTop: '3px'
                  }
                ],
                height: '30px',
                borderWidth: '1px',
                borderColor: '#999999',
                action: {
                  type: 'message',
                  label: 'action',
                  text: '世上分為三種詐欺師–詐騙他人錢財的「白鷺」，色誘欺騙異性的「紅鷺」，以及只吃白鷺和紅鷺、最凶惡的「黑鷺」。黑崎高志郎的父親慘遭詐騙，帶全家走上絕路，只有高志郎一人倖存。他從此決心學習騙術，要靠著千變萬化的偽裝身分及神乎其技的詐騙手法，以其人之道還治其人之身，向世上所有的詐欺師們復仇！'
                },
                offsetEnd: '0px',
                justifyContent: 'center',
                width: '48%',
                offsetBottom: '0px',
                alignItems: 'center'
              }
            ],
            justifyContent: 'space-between'
          }
        ],
        paddingAll: '0px'
      }
    ],
    backgroundColor: '#456173',
    paddingTop: '5px',
    paddingBottom: '10px'
  }
}
