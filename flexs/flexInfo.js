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
            url: 'https://movies.yahoo.com.tw/i/o/production/movies/November2022/nwaKmVU4FuHHmBWVVWsP-800x1185.jpg',
            aspectMode: 'cover',
            size: 'full'
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
                text: '財閥家的小兒子',
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
                color: '#E4F2ED',
                size: 'sm',
                flex: 2
              },
              {
                type: 'text',
                text: '2022-11-18',
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
                text: '16集',
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
                text: '7.9',
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
                text: '鄭大胤',
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
                text: '金泰姬',
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
                text: '宋仲基、李聖旻李星民、申鉉彬、金南喜、趙漢哲'
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
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: 'OTT查詢',
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
                  text: 'ott search'
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
                  text: '《財閥家的小兒子》是韓國JTBC在2022年11月推出的連續劇，改編自山景的同名網路小說，由《她很漂亮》、《W－兩個世界》的導演鄭大胤與《成均館緋聞》、《60天，指定倖存者》的編劇金泰姬合作打造，宋仲基、李聖旻、申鉉彬主演。此劇講述被誣陷私吞資金而被財閥家殺害的尹賢宇，重生後成為殺死自己的財閥家的小兒子，為了侵吞整個財閥家族，一步步成長並報仇的故事。'
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
