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
            url: 'https://movies.yahoo.com.tw/i/o/production/movies/June2022/Z1sncIugXKH0UkO1WHeC-1143x1672.jpg',
            aspectMode: 'cover',
            size: 'full',
            animated: true,
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
                text: '還魂 ',
                size: 'xl',
                weight: 'bold',
                color: '#ffffff'
              },
              {
                type: 'filler'
              }
            ],
            height: '40px'
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '播出日期',
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '2022-01-21',
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
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '10集',
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
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '8.6',
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
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '朴俊和(Park Jun Hwa)',
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
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '洪氏姊妹（洪貞恩、洪美蘭）',
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
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5,
                text: '李宰旭(Lee Jae Wook) 、 庭沼珉(Jung So Min) '
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
                color: '#aaaaaa',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: 'friDay影音',
                wrap: true,
                color: '#ffffff',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: '影劇類型',
                    align: 'center',
                    size: 'md',
                    color: '#ffffff',
                    offsetTop: '5px'
                  }
                ],
                height: '30px',
                borderWidth: '1px',
                borderColor: '#999999',
                action: {
                  type: 'message',
                  label: 'action',
                  text: '劇情'
                },
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
                    color: '#ffffff',
                    offsetTop: '5px'
                  }
                ],
                height: '30px',
                borderWidth: '1px',
                borderColor: '#999999',
                action: {
                  type: 'message',
                  label: 'action',
                  text: '劇情'
                },
                width: '48%',
                position: 'absolute',
                offsetEnd: '0px'
              }
            ],
            position: 'relative'
          }
        ],
        paddingAll: '0px'
      }
    ],
    backgroundColor: '#03303Acc',
    background: {
      type: 'linearGradient',
      angle: '0deg',
      startColor: '#03303Acc',
      endColor: '#00000000'
    },
    paddingTop: '5px',
    paddingBottom: '10px'
  }
}
